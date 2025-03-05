import { Inter } from 'next/font/google'
import './globals.css';
import Headers from '@/components/headers';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Welth',
    description: 'Welth is a platform that helps you manage your wealth and investments.',
}


export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    {/* header */}
                    <Headers />
                    <main className='min-h-screen'>
                        {children}
                    </main>
                    {/* footer */}
                    <footer className='bg-blue-50 py-12'>
                        <div className='container mx-auto text-center px-4 text-gray-600'>
                            <p>Made with 💗 to manage your finance</p>
                        </div>
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}