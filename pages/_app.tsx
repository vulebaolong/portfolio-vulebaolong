import "@/styles/globals.css";
import type { AppProps } from "next/app";

// components
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";

// router
import { useRouter } from "next/router";

//  framer motion
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div className="h-full" key={router.route}>
                    <Transition />
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}
