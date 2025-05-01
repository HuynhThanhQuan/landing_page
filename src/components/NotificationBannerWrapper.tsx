"use client";

import { usePathname } from 'next/navigation';
import { NotificationBanner } from './NotificationBanner';

export const NotificationBannerWrapper = () => {
  const pathname = usePathname();
  const isEducationPage = pathname?.startsWith('/education');

  if (isEducationPage) {
    return null;
  }

  return <NotificationBanner />;
}; 