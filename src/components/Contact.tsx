
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get in touch with us for any inquiries
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-700">
                #10, 4th Main Road, Vidyaranyapura, Bangalore, Bangalore North, Karnataka, India, 560097
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-700">
                  +91-7503178759
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-4 text-gray-700">
                  saimilanfutureenergy@gmail.com
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;