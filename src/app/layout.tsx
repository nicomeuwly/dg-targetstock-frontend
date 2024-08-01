import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "DG-TargetStock",
  description: "Web-based solution to automate target stock in Digitec shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qvc1jad.css"></link>
      </head>
      <body className="font-['canada-type-gibson'] min-h-screen top-0 overflow-x-hidden flex flex-col justify-between">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
