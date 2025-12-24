import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our biodata maker? We'd love to hear from you! Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@biodataforwedding.com</p>
                  <p className="text-gray-600">info@biodataforwedding.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-rose-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">Mumbai, Maharashtra</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};