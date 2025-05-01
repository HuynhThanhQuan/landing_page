"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isEducationPage = pathname === '/education';

  const getLinkHref = (section: string) => {
    if (isEducationPage) {
      return `/#${section}`;
    }
    return `#${section}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.company.title')}
            </h3>
            <p className="text-gray-400 whitespace-nowrap">
              {t('footer.company.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="ml-8">
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.links.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={getLinkHref('about')} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link href={getLinkHref('services')} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.services')}
                </Link>
              </li>
              <li>
                <Link href={getLinkHref('faq-contact')} className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.contact.title')}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.contact.email')}</li>
              <li>{t('footer.contact.phone')}</li>
              <li>{t('footer.contact.address')}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              {t('footer.social.title')}
            </h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/curiousmachine/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.social.linkedin')}
              </a>
              <a href="https://www.facebook.com/thecuriousmachine" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.social.facebook')}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}; 