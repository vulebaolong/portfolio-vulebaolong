import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
                <meta
                    name="description"
                    content="Welcome to my portfolio website. I'm a passionate Front-end and Back-end Web Developer with expertise in HTML, CSS, JavaScript, ReactJs, Typescript, Node.js, and more. Explore my projects and skills, and get in touch to discuss potential collaborations."
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
