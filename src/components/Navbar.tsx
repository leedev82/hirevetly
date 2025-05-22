
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-brand-700">TalentMatch</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">Log In</Button>
          <Button size="sm" className="bg-brand-500 hover:bg-brand-600 text-white">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
