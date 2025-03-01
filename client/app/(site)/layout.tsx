// app/(site)/layout.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer autoClose={2000} />
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
