import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Sojitoy Team",
    template: "%s | Sojitoy Team",
  },
  description: "Explore our team members’ portfolios and find the right expertise for your next challenge.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" forcedTheme="dark">
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
