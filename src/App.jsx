import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExpertiseSection from "./components/ExpertiseSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OutcomesSection from "./components/OutcomesSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

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
    </div>
  );
}

export default App;
