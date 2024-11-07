import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Space Into a Luxury Haven
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience premium interior design solutions at surprisingly affordable prices.
            We turn ordinary spaces into extraordinary living experiences.
          </p>
          <a href="#contact" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}