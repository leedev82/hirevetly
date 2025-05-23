
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, ExternalLink } from "lucide-react";
import heroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-24 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white animate-fade-in">
            <span className="text-brand-600">Instantly</span> Find Top Talent <span className="text-brand-600">Guaranteed</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
            Cut hiring time by <span className="font-bold text-brand-600">60%</span> with our AI-powered platform that matches you with pre-rated candidates 10× faster.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 rounded-md flex items-center gap-2 group shadow-lg">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="text-gray-700 flex items-center gap-1 hover:text-brand-600">
              Book a Demo
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-amber-100 border border-amber-200 rounded-md p-3 text-amber-800 text-sm flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Clock className="h-4 w-4 text-amber-800" />
            <p><span className="font-bold">Limited availability:</span> Only 50 demo slots left this month — Reserve yours now!</p>
          </div>
          
          <div className="pt-4 border-t border-gray-200 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-semibold text-gray-700">Trusted by 1,000+ top companies</span>
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 bg-gray-200/70 rounded-md w-20 flex items-center justify-center text-xs font-medium text-gray-500">
                  LOGO {i}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <Users className="inline h-3 w-3 mr-1" /> <span className="font-semibold">+2,500 recruiters</span> found top talent this month
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="ml-1 text-sm text-gray-600">Rated 4.8/5 by <span className="font-semibold">TalentPro Magazine</span></p>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src={heroImage}
            alt="TalentMatch AI Recruitment Platform Dashboard"
            className="w-full h-auto object-cover"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
