import type { Metadata } from "next";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "@/features/store/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Trek",
  description: "Find your favorite tracking destination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
