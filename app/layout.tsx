import type { Metadata } from "next";
import "./globals.css";
import Footer from "./footer";

export const metadata: Metadata = {
  title: {
    template: '%s | Maria Polak',
    default: 'Portfolio | Maria Polak',
  },
  description: 'Portfolio of Maria Polak',
  metadataBase: new URL('https://mariapolak.github.io/'),
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}