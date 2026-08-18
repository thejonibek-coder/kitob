import "./globals.css";
import { ThemeProvider } from "./providers";

export const metadata = {
  title: "E.BOOKS",
  description: "Elektron kitoblar platformasi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}