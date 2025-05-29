'use client';

import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useEffect, useState } from 'react';

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const theme = useMemo(() => {
    const mode = resolvedTheme === 'dark' ? 'dark' : 'light';
    return createTheme({
      palette: {
        mode,
        background: {
          default: mode === 'dark' ? '#0f172a' : '#fff', // Match Tailwind
          paper: mode === 'dark' ? '#1e293b' : '#fff',
        },
        text: {
          primary: mode === 'dark' ? '#f8fafc' : '#0f172a',
          secondary: mode === 'dark' ? '#94a3b8' : '#475569',
        },
      },
      typography: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
      },
    });
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      <MuiThemeWrapper>{children}</MuiThemeWrapper>
    </NextThemeProvider>
  );
}
