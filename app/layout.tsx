import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './css/style.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Loading from './components/Loading/loading';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ignite Church Brussel',
  description:
    'Experience vibrant Christian community in the heart of Belgium. Join us for dynamic worship, impactful ministries, and transformative events. Explore Ignite Church now.',
  keywords:
    'ignite church, church, brussels, church brussels, christian church, christian community, evangelical church, worship brussels',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0f0f0f" />

        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <--========== Open Graph / Facebook ===========--> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ignite-church.vercel.app/" />
        <meta property="og:title" content="Ignite Church" />
        <meta
          property="og:description"
          content="Your Christian community in the heart of Belgium. Join us for dynamic worship, impactful ministries, and transformative events."
        />
        <meta property="og:image" content="/metatag-ignitechurch.png" />

        {/* <--=========== Twitter ===============--> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ignite-church.vercel.app/" />
        <meta property="twitter:title" content="Ignite Church" />
        <meta
          property="twitter:description"
          content="Your Christian community in the heart of Belgium. Join us for dynamic worship, impactful ministries, and transformative events."
        />
        <meta property="twitter:image" content="/metatag-ignitechurch.png" />
      </head>
      <body className={inter.className}>
        <Loading />
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
