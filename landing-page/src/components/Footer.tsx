"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              Data Science Education
            </h3>
            <p className="text-gray-400">
              Empowering the next generation of data scientists through comprehensive education and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#faq-contact" className="text-gray-400 hover:text-white transition-colors">
                  FAQ & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Info
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@datascience.edu</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education St, City, Country</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Data Science Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 