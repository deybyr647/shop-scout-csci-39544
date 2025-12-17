import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SEOHead from "@/components/SEOHead";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* This injects the head tags into every page */}
            <SEOHead />

            <Component {...pageProps} />
        </>
    );
}