import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'AI ?????????',
  description: '????????????',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">AI ??</a>
            <nav>
              <a href="/slides">????</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">? {new Date().getFullYear()} AI Presentation</div>
        </footer>
      </body>
    </html>
  );
}
