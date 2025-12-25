import { useState } from 'react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is Creating a Biodata Really Free?",
      answer: "Absolutely! Our platform offers the freedom to create your marriage biodata without any charges. The free version allows you to include up to 10 fields in your biodata. If you need more fields with full visibility, you can explore our affordable paid options. Enjoy a hassle-free experience with no hidden costs!"
    },
    {
      question: "Is My Data Safe If I Create My Biodata Here?",
      answer: "Your privacy is our top priority! Your biodata is created and processed entirely in your browser - we do not store your personal information on our servers. The only data we collect is your name and mobile number, which is required solely for payment verification. We never sell, share, or transfer your data to anyone. Your information stays with you, safe and secure."
    },
    {
      question: "How Simple is the Biodata Creation Process?",
      answer: "Creating your biodata is as easy as 1-2-3. Our user-friendly interface ensures a straightforward and simple process, guiding you through each step seamlessly"
    },
    {
      question: "What Sets Your Designs Apart?",
      answer: "Our designs are not just visually appealing they're the latest in matrimonial trends. We blend tradition with modernity, providing a stunning backdrop for your love story."
    },
    {
      question: "Are the Designs High-Quality?",
      answer: "Absolutely! We take pride in delivering high-quality designs to ensure your marriage biodata reflects the significance of your journey with elegance and precision"
    },
    {
      question: "Can I Preview Before Finalizing?",
      answer: "Certainly! We believe in perfection. Preview and tailor your biodata to perfection before finalizing. Your satisfaction is our top priority"
    },
    {
      question: "How Do I Download the Final Biodata?",
      answer: "Downloading your final biodata is a breeze. Once you've previewed and selected your template, simply click download, and your personalized biodata is ready to go"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        FAQs
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Your Questions, Our Answers: Unveiling the Biodata Creation Journey
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-6 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
