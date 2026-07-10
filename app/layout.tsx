import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Islam Touba | Senior QA Engineer",
  description:
    "Portfolio of Islam Touba — Senior Software QA Engineer specializing in test automation with Playwright, Selenium, and CI/CD pipelines.",
  keywords: ["QA Engineer", "Test Automation", "Playwright", "Selenium", "Islam Touba"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
