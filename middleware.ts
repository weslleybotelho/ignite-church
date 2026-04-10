import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './app/i18n/config';

/** Root-level files with a dot in the name that we serve from /public (exact path match). */
const ALLOWED_ROOT_FILES = new Set([
  '/robots.txt',
  '/sitemap.xml',
  '/site.webmanifest',
  '/favicon.ico',
  '/favicon.png',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/metatag-ignitechurch.png',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/img') ||
    pathname.startsWith('/svg')
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/.well-known')) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment?.includes('.')) {
    if (ALLOWED_ROOT_FILES.has(pathname)) {
      return NextResponse.next();
    }
    return new NextResponse(null, { status: 404 });
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get('accept-language') || '';
  let detectedLocale = defaultLocale;

  for (const locale of locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) {
      detectedLocale = locale;
      break;
    }
  }

  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && locales.includes(cookieLocale as (typeof locales)[number])) {
    detectedLocale = cookieLocale as (typeof locales)[number];
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|admin).*)'],
};
