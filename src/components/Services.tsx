import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Interior Design",
      description: "Comprehensive design solutions tailored to your style and budget."
    },
    {
      title: "Home Improvement",
      description: "Transform your living spaces with our expert renovation services."
    },
    {
      title: "Luxury Consulting",
      description: "Expert guidance on creating premium living spaces within your budget."
    },
    {
      title: "3D Visualization",
      description: "See your dream space before we begin the transformation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}