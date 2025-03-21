import type { Metadata } from "next";
import "./globals.css";
import { DeviceProvider } from "./context/DeviceContext";
import ResponsiveWrapper from "./context/ResponsiveWrapper";

export const metadata: Metadata = {
  title: "Pistah | Brands - Influencers match making solution",
  description: "A Match making platform for brands and influencers to have better reach",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <DeviceProvider>
          <ResponsiveWrapper>
            {children}
          </ResponsiveWrapper>
        </DeviceProvider>
      </body>
    </html>
  );
}
