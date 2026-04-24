import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdur Rehman | Frontend Developer | React & AI-Native Builder",
  description:
    "First-year CE student building production-ready web apps. Specializing in React, Next.js, and AI-powered development. View portfolio, projects, and services.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI-Native Development",
    "Vibe Coding",
    "Web Development",
    "Abdur Rehman",
    "Frontend Developer Karachi",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Abdur Rehman" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Abdur Rehman | Frontend Developer & AI-Native Builder",
    description:
      "First-year CE student shipping production-ready apps. React, Next.js, and AI-powered development.",
    url: "https://my-potfolio-8qui.vercel.app",
    siteName: "Abdur Rehman Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdur Rehman | Frontend Developer",
    description:
      "First-year CE student building production-ready web apps with AI-native workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased">
        <SmoothScrollProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}