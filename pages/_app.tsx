import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig reducedMotion="user">
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </MotionConfig>
  );
}
