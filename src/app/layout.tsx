import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Ikyu Portfolio",
    template: "%s | Ikyu Portfolio",
  },
  description: "A personal portfolio for data engineering projects, case studies, and analytics work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body suppressHydrationWarning className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
