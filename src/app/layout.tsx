import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { BaseLayout } from '@/components/layouts/base-layout';
import { TooltipProvider } from '@/components/ui/tooltip';
import '@packages/ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Notes App',
    description: 'Your personal note taking app',
    generator: 'v0.dev'
};

export default function RootLayout({
    children,
    list,
    detail
}: {
    children: React.ReactNode;
    list: React.ReactNode;
    detail: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <TooltipProvider>
                    <BaseLayout list={list} detail={detail}>
                        {children}
                    </BaseLayout>
                </TooltipProvider>
            </body>
        </html>
    );
}
