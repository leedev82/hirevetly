
import { CircleCheck, AreaChart, Calendar } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CircleCheck className="h-8 w-8 text-brand-500" />,
      title: "Smart AI Matching Technology",
      description: "Our proprietary algorithm guarantees candidates with the perfect skill match for your open roles in record time.",
    },
    {
      icon: <AreaChart className="h-8 w-8 text-brand-500" />,
      title: "Visualize Skill Gaps in Seconds",
      description: "Every candidate is instantly pre-rated on both technical and soft skills relevant to your industry.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-brand-500" />,
      title: "Instant Hybrid Interview Booths",
      description: "Virtual or in-person interview scheduling that syncs with your calendar automatically, filling roles 3× faster.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-brand-600">1,000+ Recruiters</span> Choose TalentMatch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop wasting time on unqualified candidates. Our platform guarantees you'll find the right fit quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-5 p-3 bg-brand-50 rounded-lg inline-block group-hover:bg-brand-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-medium">
            AI-powered matching
          </div>
          <div className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-md max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-lg font-medium mb-3">Visualize how our AI matches candidates to your job requirements</h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200">
              <p className="text-gray-500">Interactive AI matching demonstration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
