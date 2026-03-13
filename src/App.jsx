import { useState } from "react";

import AboutSection from "./components/AboutSection";
import AuthModal from "./components/AuthModal";
import ContactSection from "./components/ContactSection";
import ExpertiseSection from "./components/ExpertiseSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OutcomesSection from "./components/OutcomesSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header onOpenAuth={openAuth} />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ExpertiseSection />
        <OutcomesSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <AuthModal isOpen={authOpen} initialMode={authMode} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
