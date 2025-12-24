import { Heart, Lock, Sparkles, Download, Share2, Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Section - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Section - Text Content */}
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Create Beautiful</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
                Marriage Biodata
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Professional marriage biodata maker with premium templates.
              Free forever, no login required.
            </p>

            {/* CTA Button */}
            <button
              onClick={onGetStarted}
              type="button"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Create Biodata Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Section - Biodata Previews */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Background Document (Left, Back) - White/Cream */}
            <div className="absolute left-0 top-8 w-[280px] h-[400px] transform -rotate-6 shadow-2xl rounded-lg overflow-hidden z-10">
              <img
                src="/images/premium-white-721x1024.png"
                alt="Premium White Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Document (Center) - Teal/Blue */}
            <div className="absolute left-1/2 top-4 transform -translate-x-1/2 rotate-2 w-[300px] h-[420px] shadow-2xl rounded-lg overflow-hidden z-20">
              <img
                src="/images/Islamic-blue-golden-731x1024.webp"
                alt="Islamic Blue Golden Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Document (Right) - Maroon/Purple */}
            <div className="absolute right-0 top-12 w-[280px] h-[400px] transform rotate-6 shadow-2xl rounded-lg overflow-hidden z-30">
              <img
                src="/images/Perfect-maroon-731x1024.png"
                alt="Perfect Maroon Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile/Tablet View - Stacked Images */}
          <div className="relative lg:hidden flex justify-center gap-4 mt-8">
            <div className="w-[200px] h-[280px] transform -rotate-6 shadow-xl rounded-lg overflow-hidden">
              <img
                src="/images/premium-white-721x1024.png"
                alt="Premium White Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] h-[280px] transform rotate-2 shadow-xl rounded-lg overflow-hidden z-10">
              <img
                src="/images/Islamic-blue-golden-731x1024.webp"
                alt="Islamic Blue Golden Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[200px] h-[280px] transform rotate-6 shadow-xl rounded-lg overflow-hidden">
              <img
                src="/images/Perfect-maroon-731x1024.png"
                alt="Perfect Maroon Biodata Template"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="No Login Required"
            description="Start creating immediately. No sign-up, no email verification needed."
            color="blue"
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Premium Templates Free"
            description="Access 15+ professional templates designed by experts. All completely free."
            color="purple"
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8" />}
            title="AI Writing Assistant"
            description="Get help writing professional descriptions with built-in AI suggestions."
            color="amber"
          />
          <FeatureCard
            icon={<Download className="w-8 h-8" />}
            title="Download Instantly"
            description="Generate high-quality PDF instantly. Unlimited downloads, no watermarks."
            color="green"
          />
          <FeatureCard
            icon={<Share2 className="w-8 h-8" />}
            title="Easy Sharing"
            description="Share via link or QR code with family and matchmakers securely."
            color="rose"
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="Privacy First"
            description="Your data stays in your browser. No permanent storage on servers."
            color="teal"
          />
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
            Ready to Create Your Biodata?
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands who have created their perfect marriage biodata
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Creating Now
          </button>
        </div>

        <FAQSection />
      </div>
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
