import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Maaha's Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const footer = (
    <footer>
      <p>Made with <Image className="heart-footer" src="/images/contact-icons/heart-footer.svg" height={15} width={15} alt="heart-image"/> by <a href="https://www.linkedin.com/in/maaha-ahmad/" target="_blank">Maaha Ahmad</a></p>
    </footer>
  )

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body>

        <div className="main-body">
          <NavBar />
          {children}
          {footer}
        </div>
            
      </body>
    </html>
  );
}
