import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <header>123</header>
            <Component {...pageProps} />
            <footer>123</footer>
        </>
    );
}
