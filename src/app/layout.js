import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ThemeProvider,
  FavoritesProvider,
} from "./providers";

import { LanguageProvider } from "./LanguageContext";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <FavoritesProvider>
              <Navbar />

              <main>
                {children}
              </main>

              <Footer />
            </FavoritesProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}