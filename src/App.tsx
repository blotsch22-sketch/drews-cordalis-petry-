import Navbar from "./components/Navbar";
import BackgroundPattern from "./components/BackgroundPattern";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import MusicSection from "./components/MusicSection";
import ReferencesSection from "./components/ReferencesSection";
import EventTypesSection from "./components/EventTypesSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F1] relative">
      <BackgroundPattern />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <BioSection />
        <MusicSection />
        <ReferencesSection />
        <EventTypesSection />
        <BookingSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
