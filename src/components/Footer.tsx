"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { RiLinkedinFill, RiFacebookFill, RiMailFill, RiPhoneFill, RiMapPinFill } from 'react-icons/ri';

export const Footer = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isEducationPage = pathname === '/education';

  const getLinkHref = (section: string) => {
    if (isEducationPage) {
      return `/#${section}`;
    }
    return `#${section}`;
  };

  const handleLogoClick = () => {
    if (isEducationPage) {
      router.push('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[var(--secondary-color)] to-[var(--secondary-color)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Company Info & Social */}
          <div className="space-y-6">
            <Link 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                handleLogoClick();
              }}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                {t('footer.company.title')}
              </h3>
            </Link>
            <p className="text-white/80">
              {t('footer.company.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/curiousmachine/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/40"
              >
                <RiLinkedinFill className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/thecuriousmachine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/40"
              >
                <RiFacebookFill className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Education Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.education.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLinkHref('data-science-finance')} className="text-white/80 hover:text-white transition-colors">
                  {t('footer.education.programs.dataScienceFinance')}
                </Link>
              </li>
              <li>
                <Link href={getLinkHref('machine-learning')} className="text-white/80 hover:text-white transition-colors">
                  {t('footer.education.programs.machineLearning')}
                </Link>
              </li>
              <li>
                <Link href={getLinkHref('deep-learning')} className="text-white/80 hover:text-white transition-colors">
                  {t('footer.education.programs.deepLearning')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80">
                <RiMailFill className="w-5 h-5" />
                <span>{t('footer.contact.email')}</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <RiPhoneFill className="w-5 h-5" />
                <span>{t('footer.contact.phone')}</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <RiMapPinFill className="w-5 h-5" />
                <span>{t('footer.contact.address')}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.newsletter.title')}
            </h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[var(--tertiary-color)] rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {t('footer.newsletter.button')}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                {t('footer.legal.privacy')}
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                {t('footer.legal.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 