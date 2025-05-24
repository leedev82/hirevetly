import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

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
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Apple", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Meta", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" }
  ];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Split logos into two rows for the marquee
const firstLogoRow = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
const secondLogoRow = clientLogos.slice(Math.ceil(clientLogos.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

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

        {/* Client Logos Marquee */}
        <div className="mb-16">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
            <Marquee pauseOnHover className="[--duration:40s] py-4">
              {firstLogoRow.map((client, index) => (
                <div key={`${client.name}-${index}`} className="mx-8">
                  <div className="flex h-16 w-32 items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee pauseOnHover reverse className="[--duration:40s] py-4">
              {secondLogoRow.map((client, index) => (
                <div key={`${client.name}-${index}`} className="mx-8">
                  <div className="flex h-16 w-32 items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
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
