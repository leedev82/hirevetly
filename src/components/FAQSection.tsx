
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI matching technology work?",
      answer:
        "Our proprietary algorithm analyzes over 50 data points from candidate profiles and job descriptions to find the perfect match. It considers technical skills, soft skills, experience level, company culture fit, and career trajectory to identify candidates most likely to succeed in your organization.",
    },
    {
      question: "Can I integrate TalentMatch with my existing ATS?",
      answer:
        "Yes, TalentMatch seamlessly integrates with most popular ATS platforms including Workday, Greenhouse, Lever, and more. Our API also allows for custom integrations with proprietary systems. The setup process typically takes less than a day with the help of our technical team.",
    },
    {
      question: "Is my data secure with TalentMatch?",
      answer:
        "Absolutely. TalentMatch is fully GDPR and CCPA compliant, with SOC 2 certification. We employ bank-level encryption for all data, both in transit and at rest. Our platform undergoes regular security audits and penetration testing to ensure your recruitment data remains protected.",
    },
    {
      question: "What kind of support does TalentMatch provide?",
      answer:
        "All plans include access to our help center and community forum. Professional and Enterprise plans include priority email and chat support, with Enterprise customers receiving a dedicated account manager. We also offer onboarding sessions and regular training webinars for all users.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Most clients see a significant reduction in time-to-hire within the first recruitment cycle. On average, our platform reduces the recruitment timeline by 70% while improving candidate quality. Your dedicated account manager will help track and optimize your specific metrics.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, TalentMatch operates on a month-to-month basis with no long-term contracts required. You can upgrade, downgrade, or cancel your subscription at any time through your account dashboard or by contacting our support team.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about TalentMatch and how it can transform your recruitment process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
