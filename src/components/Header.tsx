"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { href: '#hero', label: 'nav.home' },
  { href: '#learning', label: 'nav.learning' },
  { href: '#feedback', label: 'nav.feedback' },
  { href: '#roadmap', label: 'nav.ecosystem' },
  { href: '#about', label: 'nav.about' },
  { href: '#faq-contact', label: 'nav.contact' }
];

const flags = {
  vi: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f1fb-1f1f3.png",
  en: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/72x72/1f1fa-1f1f8.png"
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPastHero, setIsPastHero] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Check if we're past hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsPastHero(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to sections
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  // Handle section highlighting
  useEffect(() => {
    const handleSectionHighlight = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleSectionHighlight);
    return () => window.removeEventListener('scroll', handleSectionHighlight);
  }, []);

  return (
    // Header container - fixed position at top of page with padding
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 p-4"
    >
      {/* Max width container to center content */}
      <div className="max-w-7xl mx-auto">
        {/* Floating container with rounded corners and glass effect */}
        <motion.div 
          className={`transition-all duration-300 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-full' 
              : 'bg-white/50 backdrop-blur-sm rounded-full'
          }`}
          style={{
            boxShadow: scrolled 
              ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
              : '0 2px 10px rgba(0, 0, 0, 0.05)',
            width: isPastHero ? '50%' : '100%',
            margin: isPastHero ? '0 auto' : '0'
          }}
        >
          {/* Inner container with dynamic height and padding */}
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isPastHero ? 'h-12 px-6' : 'h-14 px-8'
          }`}>
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginLeft: isPastHero ? '5px' : '0'
              }}
            >
              <a href="#hero" className="flex items-center" onClick={(e) => handleScrollToSection(e, '#hero')}>
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {/* Dynamic logo size based on scroll state */}
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={isPastHero ? 32 : 40}
                    height={isPastHero ? 32 : 40}
                    className="mr-2 transition-all duration-300"
                    priority
                  />
                </motion.div>
                {!isPastHero && (
                  <motion.span 
                    className={`font-bold text-blue-500 transition-all duration-300 ${
                      isPastHero ? 'text-lg' : 'text-xl'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ color: "#1d4ed8" }}
                    transition={{ duration: 0.2 }}
                  >
                    Curious Machine
                  </motion.span>
                )}
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className={`relative text-[var(--text-color)] hover:text-[var(--secondary-color)] font-[var(--font-heading)] font-medium transition-all ${
                    isPastHero ? 'text-sm' : 'text-base'
                  }`}
                  style={{
                    transition: 'all 0.3s ease',
                    color: activeSection === link.href.replace('#', '') 
                      ? 'var(--secondary-color)' 
                      : 'var(--text-color)'
                  }}
                  whileHover="hover"
                >
                  {t(link.label)}
                  {/* Underline effect on hover */}
                  <motion.div
                    variants={{
                      hover: {
                        width: '100%',
                        transition: { duration: 0.1, ease: 'easeInOut' }
                      }
                    }}
                    className="absolute bottom-[-5px] left-0 h-[2px] w-0"
                    style={{ 
                      background: 'var(--gradient-secondary)',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Language Switcher - Only show before hero section */}
            {!isPastHero && (
              <div className="" style={{
                display: 'flex',
                background: 'var(--glass-background)', 
                border: '1px solid var(--glass-border)',
                borderRadius: '12px',
                padding: '4px',
                gap: '4px',
                backdropFilter: 'blur(10px)', 
                WebkitBackdropFilter: 'blur(10px)' 
              }}>
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
                    alt="Tiếng Việt"
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
            )}

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
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className={`block px-3 py-2 rounded-md transition-colors ${
                        activeSection === link.href.replace('#', '')
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t(link.label)}
                    </motion.a>
                  ))}
                  {/* Mobile Language Switcher */}
                  <div className="mt-4 px-3">
                    <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-lg p-2">
                      <motion.button
                        onClick={() => setLanguage('vi')}
                        className={`p-2 rounded-md transition-all ${
                          language === 'vi'
                            ? 'bg-white shadow-sm'
                            : 'hover:bg-gray-200'
                        }`}
                        style={{
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
                          alt="Tiếng Việt"
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
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}; 