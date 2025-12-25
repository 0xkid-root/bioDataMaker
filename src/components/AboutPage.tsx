import { Heart, Users, Star, Sparkles } from 'lucide-react';
import { FAQSection } from './FAQSection';


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


         {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to create a biodata?</h3>
              <p className="text-gray-600">Creating a basic biodata takes just 5-10 minutes. With our easy-to-use interface, you can customize and download your biodata in no time.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my personal information safe?</h3>
              <p className="text-gray-600">Absolutely! Your data stays in your browser. We don't store your personal information on our servers for privacy protection.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I customize the templates?</h3>
              <p className="text-gray-600">Yes! Our templates are fully customizable. You can change colors, fonts, and layouts to match your preferences.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer customer support?</h3>
              <p className="text-gray-600">Yes, our support team is available during business hours to help with any questions or issues you may have.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should be included in marriage biodata?</h3>
              <p className="text-gray-600">A marriage biodata typically includes personal details like your name, age, height, religion, educational qualifications, profession, family background, and contact information. It should also highlight your hobbies, interests, and preferences for a potential partner. A well-rounded biodata for marriage helps provide a comprehensive introduction to you and your family.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I write about me in marriage biodata?</h3>
              <p className="text-gray-600">When writing about yourself in a biodata, focus on key aspects such as your background, education, career, values, and personality. Be honest and clear, highlighting qualities that reflect your lifestyle and preferences. Ensure it is concise yet informative, as this section is an important part of making a first impression.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to make a biodata for marriage?</h3>
              <p className="text-gray-600">To make a bio data, start by selecting a marriage biodata format that suits your style. Fill in the required details like personal information, family background, education, and professional life. Personalize the template to reflect your character and preferences. Once completed, you can easily download marriage biodata in your preferred format.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a perfect marriage biodata format?</h3>
              <p className="text-gray-600">A perfect marriage biodata format should be clean, easy to read, and organized. It should highlight your key details, including personal information, family background, education, career, and your partner preferences. Depending on cultural needs, formats like Hindu biodata format or Muslim biodata format may also be preferred.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I write about me in a biodata?</h3>
              <p className="text-gray-600">In your matrimonial biodata, the "About Me" section should provide a snapshot of who you are. Mention your interests, hobbies, career aspirations, and values. Keep it professional but warm, highlighting your personality and what you're looking for in a partner. This section is crucial to give your potential partner a first impression.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best Muslim biodata format?</h3>
              <p className="text-gray-600">The best Muslim biodata format should include essential information like your name, age, height, religion, sect, education, profession, family background, and contact details. It should also highlight your values, lifestyle preferences, and expectations from a life partner. A well-structured Muslim biodata format respects cultural values while presenting your personality effectively.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the ideal Muslim marriage biodata format?</h3>
              <p className="text-gray-600">An ideal Muslim marriage biodata format should be clear, respectful, and comprehensive. It should include your religious background, family status, education, profession, and personal preferences. The format should be professional yet warm, ensuring all important details are presented in an organized manner that aligns with Islamic values and cultural expectations.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I create biodata for a Muslim girl's marriage?</h3>
              <p className="text-gray-600">Creating biodata for a Muslim girl's marriage involves including essential details like her name, age, height, religion, sect, education, profession, family background, and contact information. It should also highlight her values, lifestyle preferences, and expectations from a life partner. Our platform offers templates that respect cultural values while presenting her personality effectively.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get a Muslim girl marriage biodata PDF?</h3>
              <p className="text-gray-600">You can easily create and download a Muslim girl marriage biodata in PDF format using our platform. Simply fill in the required details following our culturally appropriate templates, customize as needed, and click the download button. Our PDF biodata format ensures your document looks professional and can be easily shared with potential matches and their families.</p>
            </div>
          </div>
        </div>
        <FAQSection/>
      </div>
    </div>
  );
};