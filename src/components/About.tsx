import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Aditya Sharma</h3>
            <p className="text-gray-600">Founder, Luxury Infra</p>
          </div>
          <p className="text-gray-700 mb-6">
            At Luxury Infra, we believe that luxury shouldn't be a privilege of the few. 
            Our mission is to democratize high-end interior design by making it accessible 
            to everyone who dreams of living in a beautifully crafted space.
          </p>
          <p className="text-gray-700">
            With years of experience in interior design and home improvement, we've 
            perfected the art of creating luxurious spaces without the luxury price tag. 
            Our innovative approach combines premium design principles with smart material 
            choices to deliver stunning results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}