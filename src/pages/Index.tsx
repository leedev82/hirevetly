
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
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import resumeai from "../assets/resumeai.png";

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
      {/* <OfferBanner /> */}
      <Navbar />
      <HeroSection />
      <div className="bg-gray-50/50 py-16">
        <ContainerScroll
          titleComponent={
            <>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
                  Our <span className="text-brand-600">Recruitment</span> Technology
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto text-center">
                  Discover how our AI-powered platform revolutionizes the hiring process
                </p>
              </div>
            </>
          }
        >
          <img
            src={resumeai}
            alt="TalentMatch Teamwork Platform"
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>
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
