
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-brand-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6 flex items-center gap-2 mx-auto">
          <Clock className="h-4 w-4" />
          <span>Limited Time Offer: 30% OFF Annual Plans</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
          Ready to Transform Your Recruitment Process?
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Join <span className="font-bold">1,000+ companies</span> that are filling positions 3× faster with TalentMatch. Start your free trial today.
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
        <p className="mt-6 text-sm opacity-80">
          <span className="font-medium">100% satisfaction guarantee</span> — 30-day money-back if you're not completely satisfied
        </p>
      </div>
    </section>
  );
};

export default CTASection;
