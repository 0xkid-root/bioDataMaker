import { Heart, Users, Star, Sparkles } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent">BiodataForWedding</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating beautiful, professional wedding biodata since 2023. We're passionate about helping families find their perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To make the process of creating beautiful, professional wedding biodata simple, accessible, and affordable for every family.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted platform for creating meaningful connections through beautifully crafted biodata profiles.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Privacy, simplicity, accessibility, and cultural respect - the foundation of everything we do.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Premium Templates</h3>
                    <p className="text-gray-600 mt-2">
                      Choose from 15+ professionally designed templates that make your biodata stand out and leave a lasting impression.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center mt-1">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">AI Writing Assistant</h3>
                    <p className="text-gray-600 mt-2">
                      Get help crafting professional descriptions with our built-in AI suggestions that enhance your biodata content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Sparkles className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Privacy First</h3>
                    <p className="text-gray-600 mt-2">
                      Your personal information stays in your browser. We don't store your data unnecessarily, ensuring your privacy is protected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-rose-50 rounded-xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" 
                alt="Couple" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                "A successful match begins with a well-crafted biodata"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              BiodataForWedding was founded in 2023 with a simple mission: to make the process of creating professional wedding biodata accessible to every family. We recognized that creating a beautiful, meaningful biodata profile was often a complex and expensive process.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of designers and developers came together with a shared vision - to create a platform that would allow families to craft stunning biodata profiles without the need for expensive designers or complicated software.
            </p>
            <p className="text-gray-600">
              Today, thousands of families across India trust us to help them create memorable biodata profiles that represent their loved ones in the best possible light. We continue to innovate and improve our platform to serve the evolving needs of modern families while respecting traditional values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};