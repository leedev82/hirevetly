
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
          Ready to Transform Your Recruitment Process?
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of companies that are finding better talent, faster with TalentMatch. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 px-8">
            Get Started Free
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-brand-500 flex items-center gap-2">
            Schedule a Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
