"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { href: '/#hero', label: 'nav.home' },
  { href: '/#learning', label: 'nav.learning' },
  { href: '/#feedback', label: 'nav.feedback' },
  { href: '/#roadmap', label: 'nav.ecosystem' },
  { href: '/#about', label: 'nav.about' },
  { href: '/#faq-contact', label: 'nav.contact' }
];

const flags = {
  vi: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f1fb-1f1f3.png",
  en: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f1fa-1f1f8.png"
};

export const EducationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.split('#')[1];
    
    // Navigate to home page first
    router.push('/');

    // Create a function to handle the scroll after navigation
    const handleScrollAfterNavigation = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Add event listener for when the page is loaded
    window.addEventListener('load', handleScrollAfterNavigation);

    // Also try to scroll after a short delay as a fallback
    setTimeout(handleScrollAfterNavigation, 500);

    // Clean up the event listener
    return () => {
      window.removeEventListener('load', handleScrollAfterNavigation);
    };
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className={`transition-all duration-300 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-full' 
              : 'bg-white/50 backdrop-blur-sm rounded-full'
          }`}
          style={{
            boxShadow: scrolled 
              ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
              : '0 2px 10px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="flex justify-between items-center h-14 px-8">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" onClick={(e) => handleNavigation(e, '/#hero')} className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                    priority
                  />
                </motion.div>
                <motion.span 
                  className="font-bold text-blue-500 text-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ color: "#1d4ed8" }}
                  transition={{ duration: 0.2 }}
                >
                  Curious Machine
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="relative text-[var(--text-color)] hover:text-[var(--secondary-color)] font-[var(--font-heading)] font-medium transition-all text-base"
                >
                  {t(link.label)}
                  <motion.div
                    className="absolute bottom-[-5px] left-0 h-[2px] w-0"
                    style={{ 
                      background: 'var(--gradient-secondary)',
                      transition: 'width 0.3s ease'
                    }}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.button
                onClick={() => setLanguage('vi')}
                className={`p-2 rounded-md transition-all ${
                  language === 'vi'
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-gray-200'
                }`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: language === 'vi' 
                    ? 'var(--gradient-primary)' 
                    : 'transparent',
                  border: language === 'vi' 
                    ? '1px solid var(--glass-border)' 
                    : '1px solid transparent',
                  boxShadow: language === 'vi' 
                    ? 'var(--shadow-secondary)' 
                    : 'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: 'var(--shadow-primary)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={flags.vi}
                  alt="Vietnamese"
                  width={24}
                  height={24}
                  className="rounded-sm transition-all"
                />
              </motion.button>

              <motion.button
                onClick={() => setLanguage('en')}
                className={`p-2 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-gray-200'
                }`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: language === 'en' 
                    ? 'var(--gradient-primary)' 
                    : 'transparent',
                  border: language === 'en' 
                    ? '1px solid var(--glass-border)' 
                    : '1px solid transparent',
                  boxShadow: language === 'en' 
                    ? 'var(--shadow-secondary)' 
                    : 'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: 'var(--shadow-primary)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={flags.en}
                  alt="English"
                  width={24}
                  height={24}
                  className="rounded-sm transition-all"
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.div 
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <RiCloseLine className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <RiMenu3Line className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        handleNavigation(e, link.href);
                        setIsMenuOpen(false);
                      }}
                      className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    >
                      {t(link.label)}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}; 