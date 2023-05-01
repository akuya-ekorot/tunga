import "@/styles/globals.css";
import { Courier_Prime } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${courier.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
