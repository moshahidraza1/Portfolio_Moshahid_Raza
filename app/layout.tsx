import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"], weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

export const metadata: Metadata = {
  title: "Moshahid Raza",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth`}>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >    
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
