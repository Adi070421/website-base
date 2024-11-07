import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Ready to transform your space? Contact us to begin your journey towards 
            luxury living at an affordable price.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg font-medium mb-4">Email us at:</p>
            <a 
              href="mailto:advisuals07@gmail.com" 
              className="text-xl text-blue-600 hover:text-blue-800"
            >
              advisuals07@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}