import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AutoMitra AI | AI Team That Grows Your Pipeline",
  description: "AutoMitra AI runs your outbound calls, inbound queries, WhatsApp follow-ups, and lead routing - so your sales team talks only to people who are ready.",
  keywords: "AI calling, sales automation, lead generation, WhatsApp automation, B2B sales",
  authors: [{ name: "AutoMitra AI" }],
  openGraph: {
    title: "AutoMitra AI | AI Team That Grows Your Pipeline",
    description: "AutoMitra AI runs your outbound calls, inbound queries, WhatsApp follow-ups, and lead routing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}

