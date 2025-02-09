import type { Metadata } from "next";
import "./globals.css";
import { DeviceProvider } from "./context/DeviceContext";

export const metadata: Metadata = {
  title: "Pistah",
  description: "Digital Out of Home Advertising",
  icons: {
    icon: "/favicon.ico",
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
