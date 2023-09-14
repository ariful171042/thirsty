import Navber from '@/components/share/Navber';
import './globals.css';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import Footer from '@/components/share/Footer';
import { cn } from '@/lib/utils';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});
export const metadata: Metadata = {
  title: 'Thirsty | Home',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(baiJamjuree.className, 'bg-light text-dark antialiased')}
      >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
