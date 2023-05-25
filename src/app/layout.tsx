import './globals.css';
import { roboto } from '@/app/fonts';
import { GoogleTagManager, GoogleTagManagerNoScript } from '@/components/Analytics';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Wrapper } from '@/components/Wrapper';
import clsx from 'clsx';
import Script from 'next/script';
import { ReactNode } from 'react';

export const metadata = {
  title: {
    absolute: 'codde - Find Code Examples by Dependencies',
  },
  description:
    'Discover code examples by exploring GitHub repositories with interesting dependencies. Find the best solutions for your projects. Join developers worldwide in finding inspiration and accelerating your development process.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const body = clsx(roboto.className, 'flex h-screen flex-col');

  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <GoogleTagManager />
      <Script src="https://buttons.github.io/buttons.js" />
      <body className={body} suppressHydrationWarning={true}>
        <GoogleTagManagerNoScript />
        <header>
          <Navbar />
        </header>
        <main className="flex-grow bg-black">
          <Wrapper>
            <Hero />
          </Wrapper>
          {children}
        </main>
        <footer className="footer footer-center bg-base-300 p-4 text-base-content">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
