import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const catilde = localFont({
  src: [
    {
      path: '../styles/fonts/Catilde-reguler.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Catilde-light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Catilde-semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Catilde-italic.ttf',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: "--font-catilde",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: 'swap',
  weight: ["200", "300", '400', '500', '600', '700'],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Projeto Jiquiri",
  description: "Projeto Jiquiri UFPA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${roboto.variable} ${catilde.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}