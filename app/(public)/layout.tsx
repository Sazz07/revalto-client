import { ReactNode } from 'react';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
