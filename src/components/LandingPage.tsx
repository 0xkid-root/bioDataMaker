import { Heart, Lock, Sparkles, Download, Share2, Zap } from 'lucide-react';

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
            Create Beautiful
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">
              Marriage Biodata
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional marriage biodata maker with premium templates.
            Free forever, no login required.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Create Biodata Free
          </button>
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
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Completely Free
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All templates included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Unlimited downloads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No watermarks</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fast & Easy
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Create in 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Live preview as you type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mobile-friendly interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Auto-save your work</span>
                </li>
              </ul>
            </div>
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
      </div>

      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>Made with care for Indian families</p>
        </div>
      </footer>
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
