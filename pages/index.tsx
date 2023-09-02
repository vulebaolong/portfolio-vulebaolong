// next image
import Image from "next/image";

// components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/variants";
const Home = () => {
    const dtTextDiv = `xl:pt-40 xl:text-left`;
    const dtSubtitle = `xl:max-w-xl xl:mx-0 xl:mb-16`;
    const mbBtn = `xl:hidden`;
    const dtBtn = `xl:flex`;
    const dtBgImage = ` xl:bg-cover xl:bg-right xl:bg-no-repeat`;
    const dtAvatar = `lg:bottom-0 lg:right-[8%]`;
    return (
        <div className="bg-primary/60 h-full">
            {/* text */}
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className={`text-center flex flex-col justify-center mx-auto h-full container ${dtTextDiv}`}>
                    {/* title */}
                    <motion.h1 className="h1" variants={fadeIn("down", 0.2)} initial="hidden" animate="show" exit="hidden">
                        Transforming ideas <br />
                        Into
                        <span className="text-accent">Digital Reality</span>
                    </motion.h1>

                    {/* subtitle */}
                    <motion.p className={`max-w-sm mb-10 mx-auto ${dtSubtitle}`} variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quaerat tempore optio? Molestias voluptatem totam sed quibusdam ad, voluptates
                        asperiores.
                    </motion.p>

                    {/* btn */}
                    <div className={`flex justify-center relative ${mbBtn}`}>
                        <ProjectsBtn />
                    </div>
                    <motion.div className={`hidden ${dtBtn}`} variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden">
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>

            {/* image */}
            <div className="w-[1200px] h-screen absolute right-0 bottom-0">
                {/* bg image */}
                <motion.div
                    variants={fadeIn("down", 0.01)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={`BACKGROUND bg-none w-[1200px] h-screen absolute top-0 left-0 right-0 bottom-0 mix-blend-color-dodge translate-z-0 xl:bg-explosion ${dtBgImage}`}
                ></motion.div>

                {/* particles */}
                <ParticlesContainer />

                {/* avatar img */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={`w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 ${dtAvatar}`}
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
