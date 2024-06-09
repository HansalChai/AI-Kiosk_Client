import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ez_KKook",
  description: "This is an AI KIOSK for the digital vulnerable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 루트레이아웃 */}
        {/* 아직 넣을것 없음 */}
        {children}
      </body>
    </html>
  );
}
