import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggleButton from './components/ThemeToggleButton';
import Providers from './providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cassper's Blog",
  description: 'Created by Cassper',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          min-h-screen flex flex-col
        "
      >
        <Providers>
          <Navbar />   
          <main className="flex-grow">
            {children}
            <ThemeToggleButton />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
