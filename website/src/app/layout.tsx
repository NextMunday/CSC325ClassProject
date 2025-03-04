import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '@/shared-theme/AppTheme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import AppAppBar from '@/components/AppAppBar';

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <AppTheme>
            <CssBaseline />
            <AppAppBar />
            {props.children}
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
