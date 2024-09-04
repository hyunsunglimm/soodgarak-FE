import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';
import './globals.css';
import QueryProviders from '@/context/queryProvider';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import EmptyHeader from '@/components/EmptyHeader';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  title: '숟가락',
  description:
    '오늘 뭐먹지 ? 내 음식 취향은 ? 냉장고에 있는 걸로 뭘 할 수 있을까... 정답은 바로 "숟가락" !!!',
  icons: {
    icon: '/images/soodgarak.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className='bg-neutral-100'>
        <div className='mx-auto flex min-h-dvh max-w-[640px] flex-col bg-white'>
          <QueryProviders>
            <Suspense fallback={<EmptyHeader />}>
              <Header />
            </Suspense>
            <main className='flex grow flex-col overflow-x-hidden px-20 pb-[12rem] pt-20'>
              {children}
            </main>
            <BottomNavBar />
            <div id='portal' />
          </QueryProviders>
        </div>
      </body>
    </html>
  );
}
