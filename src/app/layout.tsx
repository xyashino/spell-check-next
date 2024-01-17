import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

import { Theme } from '@/lib/enums/theme';
import { cn } from '@/lib/utils/cn';
import { ThemeProvider } from '@/providers/ThemeProvider';

import './styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spell-Checker',
  description: 'Check your spelling!',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme={Theme.LIGHT}
          disableTransitionOnChange
          themes={[Theme.LIGHT, Theme.DARK]}
        >
          <main className='flex flex-col h-svh w-screen overflow-hidden bg-background'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
