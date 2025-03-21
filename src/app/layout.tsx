import type { Metadata } from "next";
import "./globals.css";
import { DeviceProvider } from "./context/DeviceContext";

export const metadata: Metadata = {
  title: "Pistah | Brands - Influencers match making solution",
  description: "A Match making platform for brands and influencers to have better reach",
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
