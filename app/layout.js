import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "@/components/headers";


//fonts
const inter = Inter({ subset: ['latin'] });


export const metadata = {
  title: "Welth",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

        <html lang="en">
          <body
            className={`${inter.className}`}
          >
            {/* header */}
            <Headers />

            {/* We put children in main tag so the search engines search for main content in main tag  */}
            <main className="min-h-screen">
              {children}
            </main>
            {/* footer */}
            <footer className="bg-blue-50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>Made with 💗 so that you can manage your finance for your 💗! </p>
              </div>
            </footer>
          </body>
        </html>
    </ClerkProvider>
  );
}
