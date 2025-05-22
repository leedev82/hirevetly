
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="flex-1 space-y-8 mb-10 lg:mb-0">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-fade-in">
              Find Top Talent <span className="text-brand-600">in Minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our AI-powered platform matches you with pre-rated candidates 10× faster than traditional recruitment methods.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white px-6 rounded-md flex items-center gap-2 group">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-300">
              Book a Demo
            </Button>
          </div>
          
          <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">+2,500 recruiters</span> found top talent this month
            </p>
          </div>
        </div>
        
        <div className="flex-1 lg:flex lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img 
            src={heroImage} 
            alt="TalentMatch AI Platform" 
            className="max-w-full lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
