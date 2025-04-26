"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive data science education and training programs, including courses, workshops, and personalized mentoring."
  },
  {
    question: "How can I get started?",
    answer: "You can get started by exploring our courses, signing up for a free consultation, or contacting us directly through our contact form."
  },
  {
    question: "Do you offer corporate training?",
    answer: "Yes, we provide customized corporate training programs tailored to your organization's specific needs and goals."
  }
];

export const FAQContact = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq-contact" className="py-16 relative">
      {/* Background */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backgroundColor: 'rgba(245, 245, 245, 0.9)',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.05)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-gray-400">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h2>

            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}; 