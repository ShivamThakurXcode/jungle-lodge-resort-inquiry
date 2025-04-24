import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jungle Lodge Management System",
  description:
    "Comprehensive management system for jungle lodges and wildlife resorts across India",
  keywords:
    "jungle lodge, wildlife resort, management system, booking system, India, wildlife tourism",
  authors: [{ name: "Jungle & Lodge" }],
  creator: "Jungle & Lodge",
  publisher: "Jungle & Lodge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
