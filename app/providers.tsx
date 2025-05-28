'use client';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('ThemeProvider is rendering');

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}