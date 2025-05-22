
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const benefits = [
    "Reduce time-to-hire by up to 70%",
    "Access to pre-vetted candidates only",
    "AI-powered skill matching ensures perfect fit",
    "Streamlined interview scheduling with calendar integration",
    "Transparent candidate ratings based on skills and experience",
    "Detailed analytics to optimize your hiring process",
    "Automated reference checking and verification",
    "Custom hiring workflows tailored to your needs",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solve Your Biggest Recruitment Challenges
            </h2>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center">
                    <Check className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-500 hover:bg-brand-600 text-white">
              Reserve a Booth Interview
            </Button>
          </div>
          
          <div className="flex-1 lg:flex lg:justify-end order-first lg:order-last mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-brand-200 transform -rotate-3"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Recruitment Dashboard</h3>
                  <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Live Demo</span>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Interactive demo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
