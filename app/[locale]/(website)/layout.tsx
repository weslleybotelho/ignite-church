import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import '../../css/style.scss';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Loading from '../../components/Loading/loading';
import { Locale, locales } from '../../i18n/config';
import { getTranslations } from '../../i18n/server';
import { LocaleProvider } from '../../i18n/useTranslation';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  if (!(locales as readonly string[]).includes(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const t = getTranslations(locale);
  const baseUrl = 'https://ignite-church.vercel.app';

  return {
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}`])),
    },
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      url: `${baseUrl}/${locale}`,
      locale: locale === 'fr' ? 'fr_BE' : locale === 'nl' ? 'nl_BE' : 'en_US',
      type: 'website',
      images: ['/metatag-ignitechurch.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      images: ['/metatag-ignitechurch.png'],
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!(locales as readonly string[]).includes(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  return (
    <html lang={locale}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0f0f0f" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" />
        {locales.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`https://ignite-church.vercel.app/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://ignite-church.vercel.app/en" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <LocaleProvider locale={locale}>
          <Loading />
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
          <SpeedInsights />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
