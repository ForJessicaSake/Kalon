import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-Montserrat overflow-x-hidden">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
