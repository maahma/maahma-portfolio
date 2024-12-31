import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link"
import NavBar from "../components/NavBar"

export const metadata: Metadata = {
  title: "Maaha's Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  let footer = (
    <footer>
      <p>Made with 💜 by <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank">Maaha Ahmad</a></p>
    </footer>
  )

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body>
        <NavBar />
        {children}
        {footer}
      </body>
    </html>
  );
}
