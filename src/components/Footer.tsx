import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">LUXURY INFRA</h2>
          <p className="text-gray-400 mb-4">
            Transforming spaces into luxury havens
          </p>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Luxury Infra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}