import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/Language";

export const metadata: Metadata = {
  title: "İlker Kabacık — Official Website",
  description: "Entrepreneur • Builder • Strategist",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "İlker Kabacık",
    description: "Entrepreneur • Builder • Strategist",
    url: "https://ilkerkabacik.com",
    siteName: "İlker Kabacık",
    locale: "tr_TR",
    type: "website",
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Nav/>
            {children}
            <Footer/>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
