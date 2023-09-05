import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from 'next/head'

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
        <>
            <Head>
                <meta
                    name="description"
                    content="Welcome to my portfolio website. I'm a passionate Front-end and Back-end Web Developer with expertise in HTML, CSS, JavaScript, ReactJs, Typescript, Node.js, and more. Explore my projects and skills, and get in touch to discuss potential collaborations."
                />
                <link rel="icon" href="/logo1.svg" />
                <title>vulebaolong</title>
            </Head>
            <Layout>
                {contextHolder}
                <AnimatePresence mode="wait">
                    <motion.div className="h-full" key={router.route}>
                        <Transition />
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    );
}
