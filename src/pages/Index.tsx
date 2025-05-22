
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BenefitsSection from "../components/BenefitsSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Simple scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealElementsOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElementsOnScroll);
    // Initial check on page load
    revealElementsOnScroll();

    // Update the document title
    document.title = "TalentMatch | Find Top Talent in Minutes";
    
    return () => {
      window.removeEventListener('scroll', revealElementsOnScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <OfferBanner />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
