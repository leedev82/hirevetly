
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for individuals and small teams",
      features: [
        "5 job postings per month",
        "Basic AI matching",
        "Email support",
        "1 interview booth",
        "7-day candidate history",
      ],
      popular: false,
      buttonText: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$149",
      description: "Best for growing businesses",
      features: [
        "25 job postings per month",
        "Advanced AI matching",
        "Priority email & chat support",
        "5 interview booths",
        "30-day candidate history",
        "Custom recruitment workflow",
        "Team collaboration tools",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      savings: "Save 30% with annual plan",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited job postings",
        "Enterprise-grade AI matching",
        "Dedicated account manager",
        "Unlimited interview booths",
        "90-day candidate history",
        "API access",
        "Advanced analytics",
        "White-labeling options",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your recruitment needs.
            All plans include a <span className="font-medium">14-day free trial with no credit card required</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'shadow-xl border-brand-400 transform hover:-translate-y-1 bg-gradient-to-b from-white to-brand-50/30' 
                  : 'shadow-md hover:shadow-lg border-gray-200'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className={`text-center pt-8 ${plan.popular ? 'pb-6' : 'pb-4'}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
                {plan.savings && (
                  <p className="mt-2 text-sm font-medium text-green-600">{plan.savings}</p>
                )}
              </CardHeader>
              
              <CardContent className="pt-4">
                <div className="text-center mb-4">
                  <span className="text-xs uppercase tracking-wider font-medium text-gray-500">Includes:</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-brand-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <div className="w-full space-y-3">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-md' 
                        : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                  <p className="text-xs text-center text-gray-500">14-day free trial, no credit card required</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
