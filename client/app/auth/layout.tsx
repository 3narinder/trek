import { ToastContainer } from "react-toastify";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <main>{children}</main>;
    </>
  );
}
