import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// components
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";

// router
import { useRouter } from "next/router";

//  framer motion
import { AnimatePresence, motion } from "framer-motion";

// message
import { setMessageApi } from "@/helpers/message";
import { message } from "antd";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        setMessageApi(messageApi);
    }, [messageApi]);
    return (
        <Layout>
            {contextHolder}
            <AnimatePresence mode="wait">
                <motion.div className="h-full" key={router.route}>
                    <Transition />
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}
