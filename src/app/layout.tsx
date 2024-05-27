'use client';

import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">홈으로</Link>
        </header>

        {children}
      </body>
    </html>
  );
}
