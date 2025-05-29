import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggleButton from './components/ThemeToggleButton';
import Providers from './providers';
import { Metadata } from 'next';
import LoadingSpinnerOnRouteChange from './components/LoadingSpinnerOnRouteChange';

export const metadata: Metadata = {
  title: "Ezunu Onochie Peter's Portfolio",
  description: 'Created by Onochie Peter Ezunu, a Software Engineer from Nigeria.',
  icons: {
    icon: '/favicon.ico',
  },
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
            <LoadingSpinnerOnRouteChange />
            {children}
            <ThemeToggleButton />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
