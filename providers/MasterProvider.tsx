'use client';
import Footer from '@/components/share/Footer';
import FooterMini from '@/components/share/FooterMini';
import Navber from '@/components/share/Navber';
import NavberMini from '@/components/share/NavberMini';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
const MasterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if ((children as ReactElement)?.props?.segment?.at(0) === 'notfound') {
    return <>{children}</>;
  }

  switch (pathname) {
    case '/':
      return (
        <>
          <Navber />
          {children}
          <Footer />
        </>
      );
    case '/user/signin':
    case '/user/signup':
      return (
        <>
          <NavberMini />
          {children}
          <FooterMini />
        </>
      );
    default:
      return (
        <>
          <Navber />
          {children}
          <FooterMini />
        </>
      );
  }
};

export default MasterProvider;
