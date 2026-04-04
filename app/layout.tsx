import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdur Rehman | Full-Stack Developer | MERN & Laravel Expert",
  description:
    "Full-Stack Developer specializing in MERN Stack and Laravel. Building scalable web applications that drive digital growth. View portfolio and services.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack Expert",
    "Laravel Developer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "Abdur Rehman",
  ],
  authors: [{ name: "Abdur Rehman" }],
  openGraph: {
    title: "Abdur Rehman | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN Stack and Laravel. Building scalable web applications that drive digital growth.",
    url: "https://abdur-rehman.dev",
    siteName: "Abdur Rehman Portfolio",
    locale: "en_US",
    type: "website",
  },
 twitter: {
    card: "summary_large_image",
    title: "Abdur Rehman | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in MERN Stack and Laravel.",
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