
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TalentMatch helped us reduce our time-to-hire by 72%. The quality of candidates is exceptional, and the platform's ease of use makes recruitment a breeze.",
    name: "Sarah Johnson",
    title: "Head of Talent Acquisition, TechCorp",
    avatar: "/placeholder.svg",
  },
  {
    quote: "The AI matching technology is truly game-changing. We've been able to fill specialized roles that had been vacant for months in just a matter of days.",
    name: "Michael Chen",
    title: "HR Director, InnovateCo",
    avatar: "/placeholder.svg",
  },
  {
    quote: "I was skeptical about AI recruitment tools, but TalentMatch proved me wrong. The candidates we've hired through the platform have been top performers.",
    name: "Jessica Patel",
    title: "Recruitment Manager, GrowthStart",
    avatar: "/placeholder.svg",
  },
];

const clientLogos = [
  { name: "Company A", logo: "/placeholder.svg" },
  { name: "Company B", logo: "/placeholder.svg" },
  { name: "Company C", logo: "/placeholder.svg" },
  { name: "Company D", logo: "/placeholder.svg" },
  { name: "Company E", logo: "/placeholder.svg" },
  { name: "Company F", logo: "/placeholder.svg" },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how companies across all sectors are transforming their recruitment process with TalentMatch.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center mb-16 max-w-4xl mx-auto">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm h-16 w-full flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-8 opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="absolute top-6 left-6">
              <Quote className="h-12 w-12 text-brand-200 opacity-50" />
            </div>
            
            <CardContent className="p-12 md:p-16">
              <div className="flex flex-col items-center text-center">
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-10 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md border-2 border-white">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left mt-4 sm:mt-0">
                    <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[activeIndex].title}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full shadow-sm hover:bg-brand-50"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            
            {testimonials.map((_, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="sm" 
                className={`w-3 h-3 p-0 rounded-full ${
                  index === activeIndex ? 'bg-brand-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full shadow-sm hover:bg-brand-50"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
