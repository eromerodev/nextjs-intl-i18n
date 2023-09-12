import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'i18n',
  description: 'Next.js 13: Internationalization',
};

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode, params: any
}) {

  const locale = useLocale()
  if(params.locale !== locale) {
     notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
