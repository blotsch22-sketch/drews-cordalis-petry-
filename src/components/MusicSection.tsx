import { useState } from "react";
import { MUSIC } from "../data/content";

function SpotifyTrackCard({
  title,
  artist = "DREWS CORDALIS PETRY",
  onLoad,
  compact = false,
}: {
  title: string;
  artist?: string;
  onLoad: () => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={onLoad}
      className={`w-full flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#282828] rounded-xl transition-colors group cursor-pointer ${compact ? "p-2.5" : "p-4"}`}
    >
      {/* Album art placeholder */}
      <div className={`${compact ? "w-12 h-12" : "w-14 h-14"} rounded-lg bg-gradient-to-br from-[#E97A6A]/30 to-[#F2C14E]/20 flex items-center justify-center flex-shrink-0`}>
        <svg className={`${compact ? "w-5 h-5" : "w-6 h-6"} text-white/80`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      </div>

      {/* Song info */}
      <div className="flex-1 text-left min-w-0">
        <p className={`font-semibold text-white truncate ${compact ? "text-xs" : "text-sm"}`}>{title}</p>
        <p className={`text-white/50 truncate ${compact ? "text-[10px]" : "text-xs"}`}>{artist}</p>
      </div>

      {/* Play button */}
      <div className={`${compact ? "w-8 h-8" : "w-10 h-10"} rounded-full bg-[#1DB954] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg`}>
        <svg className={`${compact ? "w-3.5 h-3.5" : "w-4 h-4"} text-black ml-0.5`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
}

function SpotifyAlbumCard({
  title,
  artist = "DREWS CORDALIS PETRY",
  subtitle = "Das Beste · 2025",
  onLoad,
}: {
  title: string;
  artist?: string;
  subtitle?: string;
  onLoad: () => void;
}) {
  return (
    <button
      onClick={onLoad}
      className="w-full bg-[#1a1a1a] hover:bg-[#282828] rounded-xl p-5 transition-colors group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {/* Album cover placeholder */}
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#E97A6A]/30 to-[#F2C14E]/20 flex items-center justify-center flex-shrink-0">
          <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>

        {/* Album info */}
        <div className="flex-1 text-left">
          <p className="text-lg font-bold text-white">{title}</p>
          <p className="text-sm text-white/60">{artist}</p>
          <p className="text-xs text-white/35 mt-0.5">{subtitle}</p>
        </div>

        {/* Play button */}
        <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg">
          <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <p className="text-[10px] text-white/25 mt-3 text-left">
        Klick lädt Spotify-Inhalte. Dabei werden Daten an Spotify übermittelt.
      </p>
    </button>
  );
}

export default function MusicSection() {
  const [albumLoaded, setAlbumLoaded] = useState(false);
  const [loadedTracks, setLoadedTracks] = useState<Set<number>>(new Set());

  const handleTrackLoad = (index: number) => {
    setLoadedTracks((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  return (
    <section id="musik" className="py-24 md:py-32 bg-[#F6E7D8]/40">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{MUSIC.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            {MUSIC.headline}
          </h2>
          <p className="text-[#2F2A26]/55 text-base md:text-lg leading-relaxed">
            {MUSIC.subline}
          </p>
        </div>

        {/* Spotify Album Player */}
        {MUSIC.spotifyAlbumId && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="card p-5 md:p-6">
              {albumLoaded ? (
                <iframe
                  src={`https://open.spotify.com/embed/album/${MUSIC.spotifyAlbumId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Album Player"
                  className="rounded-lg"
                  style={{ borderRadius: "12px" }}
                />
              ) : (
                <SpotifyAlbumCard
                  title="Das Beste"
                  onLoad={() => setAlbumLoaded(true)}
                />
              )}
            </div>
          </div>
        )}

        {/* Release Cards – gleiche Höhe durch flex-col + grow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {MUSIC.releases.map((release, i) => (
            <div key={i} className="card group flex flex-col">
              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#E97A6A] font-semibold font-['Montserrat'] tracking-wide">
                    {release.year}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#2F2A26]/15" />
                  <span className="text-xs text-[#2F2A26]/35">Album: Das Beste</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#2F2A26] mb-2">{release.title}</h3>

                {/* Description – feste Mindesthöhe für Gleichlauf */}
                <p className="text-[#2F2A26]/45 text-sm leading-relaxed mb-4 min-h-[3.5rem]">
                  {release.description}
                </p>

                {/* Spotify Track Player – pushed nach unten durch flex-grow */}
                <div className="mt-auto">
                  {release.spotifyTrackId && (
                    <div className="mb-4">
                      {loadedTracks.has(i) ? (
                        <iframe
                          src={`https://open.spotify.com/embed/track/${release.spotifyTrackId}?utm_source=generator&theme=0`}
                          width="100%"
                          height="80"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title={release.title}
                          className="rounded-lg"
                          style={{ borderRadius: "12px" }}
                        />
                      ) : (
                        <SpotifyTrackCard
                          title={release.title}
                          onLoad={() => handleTrackLoad(i)}
                          compact
                        />
                      )}
                    </div>
                  )}

                  {/* Streaming Links */}
                  <div className="flex flex-wrap gap-2">
                    {release.streamingLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[#2F2A26]/45 hover:text-[#E97A6A] bg-[#F6E7D8]/60 hover:bg-[#E97A6A]/10 px-3 py-1.5 rounded-full transition-all"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
