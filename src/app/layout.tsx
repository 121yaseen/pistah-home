import type { Metadata } from "next";
import "./globals.css";
import { DeviceProvider } from "./context/DeviceContext";

export const metadata: Metadata = {
  title: "Pistah - Digital Out of Home Advertising Solution",
  description: "Programmatic Digital Out of Home Advertising Solution",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <DeviceProvider>
          {children}
        </DeviceProvider>
      </body>
    </html>
  );
}
