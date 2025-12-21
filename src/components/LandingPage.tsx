import { Heart, Lock, Sparkles, Download, Share2, Zap } from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Create Wedding Biodata Online – Free & Professional
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            BiodataForWedding helps you create a clean, modern, and professional wedding biodata in minutes — no login, no signup, and completely free.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Wedding Biodata
          </button>
        </div>

        <div className="bg-blue-50 rounded-2xl p-6 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <span className="font-medium text-gray-800">100% Free Wedding Biodata Maker</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <span className="font-medium text-gray-800">No Login or Signup Required</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <span className="font-medium text-gray-800">High-Quality & Printable Templates</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2 text-xl">✔</span>
              <span className="font-medium text-gray-800">Privacy-First – Your Data Stays Safe</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Wedding Biodata?</h2>
            <p className="text-gray-600">
              A wedding biodata is a formal personal profile shared for marriage purposes. It usually includes personal details, education, profession, family background, and preferences. BiodataForWedding makes it easy to create this biodata in a professional and well-structured format.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why BiodataForWedding?</h2>
            <p className="text-gray-600">
              BiodataForWedding is designed to help individuals and families create a perfect wedding biodata without complexity.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Free wedding biodata maker</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>No watermark or hidden charges</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Simple, modern, and traditional formats</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Instant preview and download</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Suitable for all communities</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            How to Create Wedding Biodata Online
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Template</h3>
              <p className="text-gray-600 text-sm">Select a wedding biodata template</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Fill Details</h3>
              <p className="text-gray-600 text-sm">Add personal and family information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Preview</h3>
              <p className="text-gray-600 text-sm">Review your biodata instantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
              <p className="text-gray-600 text-sm">Save or share your wedding biodata</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Wedding Biodata Templates</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Professional Wedding Biodata Formats<br />
            Choose from multiple wedding biodata formats designed for both modern and traditional preferences. All templates are clean, readable, and suitable for parents, relatives, and marriage discussions.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Can Use BiodataForWedding?</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Boys and girls preparing marriage biodata</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Parents searching for suitable matches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Families involved in arranged marriages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Anyone looking for a professional wedding biodata</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Wedding Biodata Maker</h2>
            <p className="text-gray-600 mb-4">
              Create Wedding Biodata Without Login
            </p>
            <p className="text-gray-600">
              With BiodataForWedding, you can create and download your wedding biodata without creating an account. Your data remains private and is not stored on our servers.
            </p>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Download & Share</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download Wedding Biodata Instantly<br />
            Download your wedding biodata in high-quality format and share it easily via WhatsApp, email, or print.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Biodata Maker?
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Our biodata maker is designed to make the process of creating a professional and attractive marriage biodata as simple as possible.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Multi-language Support"
              description="Create your biodata in Hindi, English, Marathi, Gujarati, and more. Customize your profile in your preferred language."
              color="blue"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Beautiful Templates"
              description="Choose from a variety of professionally designed templates that make your biodata stand out and leave a lasting impression."
              color="purple"
            />
            <FeatureCard
              icon={<Download className="w-8 h-8" />}
              title="Multiple Formats"
              description="Download your biodata in PDF, Word, or as an image. Share digitally or print for traditional marriages."
              color="green"
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Data Privacy"
              description="Your personal information is secure. We don't store your data unnecessarily, ensuring your privacy is protected."
              color="teal"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Easy Customization"
              description="Simple editor to add, edit or remove sections according to your needs. Create a truly personalized marriage profile."
              color="amber"
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="All Communities"
              description="Templates for Hindu, Muslim, Christian, Sikh, Buddhist, and Jain communities. Customized for cultural preferences."
              color="rose"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Wedding Biodata?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands who have created their perfect wedding biodata with BiodataForWedding
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Wedding Biodata
          </button>
        </div>

        <FAQSection />
      </div>

      <div className="hidden">
        <p>BiodataForWedding is a free online wedding biodata maker that helps users create marriage biodata, wedding biodata formats, and professional biodata for wedding purposes with ease.</p>
      </div>

      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>BiodataForWedding – A free and simple wedding biodata maker trusted by families across India.</p>
        </div>
      </footer>
    </div>
  );
};

const FAQSection = () => {
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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    amber: 'bg-amber-100 text-amber-600',
    green: 'bg-green-100 text-green-600',
    rose: 'bg-rose-100 text-rose-600',
    teal: 'bg-teal-100 text-teal-600',
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className={`w-16 h-16 rounded-lg ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
