
import { Circle, Square, Triangle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Circle className="h-8 w-8 text-brand-500" />,
      title: "AI Matching Technology",
      description: "Our proprietary algorithm identifies candidates with the perfect skill match for your open roles.",
    },
    {
      icon: <Square className="h-8 w-8 text-brand-500" />,
      title: "Skill-Matrix Ratings",
      description: "Every candidate is pre-rated on both technical and soft skills relevant to your industry.",
    },
    {
      icon: <Triangle className="h-8 w-8 text-brand-500" />,
      title: "Hybrid Interview Booths",
      description: "Virtual or in-person interview scheduling that syncs with your calendar automatically.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Recruiters Choose TalentMatch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop wasting time on unqualified candidates. Our platform helps you find the right fit quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-brand-50 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
