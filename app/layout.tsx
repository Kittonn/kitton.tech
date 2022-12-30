/* eslint-disable @next/next/no-head-element */
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#0a100d]">
        <Navbar />
        <main className="container mx-auto min-h-screen px-5 lg:max-w-screen-lg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
