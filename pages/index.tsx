// next image
import Image from "next/image";
import { FcDownload } from "react-icons/fc";
// typist
import Typewriter from "typewriter-effect";

// components
import ProjectsBtn from "@/components/ProjectsBtn";
import ParticlesLinks from "@/components/ParticlesLinks";
import AvatarRight from "@/components/AvatarRight";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/variants";

function Home() {
    const handleDownloadCv = () => {
        console.log(123);
    };

    const dtTextDiv = `xl:pt-[90px] xl:text-left`;
    const dtSubtitle = `xl:max-w-xl xl:mx-0 xl:mb-16`;
    const mbBtn = `xl:hidden`;
    const dtBtn = `xl:inline-block`;
    const dtBgImage = ` xl:bg-cover xl:bg-right xl:bg-no-repeat`;
    const dtAvatar = `lg:bottom-0 lg:right-0`;
    return (
        <section className=" h-full">
            {/* text */}
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className={`text-center relative pt-[137px] flex flex-col lg:justify-center mx-auto h-full container ${dtTextDiv}`}>
                    {/* title */}
                    <div className="">
                        <motion.h2 className="md:text-2xl text-white/60" variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden">
                            Hi, I am <span className="text-accent font-bold"> VULEBAOLONG</span>
                        </motion.h2>
                        <motion.h1 className="h1" variants={fadeIn("left", 0.2)} initial="hidden" animate="show" exit="hidden">
                            <span>Front End</span>
                            <br className="inline sm:hidden" />
                            <span className="hidden sm:inline"> - </span>
                            <span>Back End</span>
                            <br />
                            <span>Web Developer</span>
                        </motion.h1>
                    </div>

                    {/* subtitle */}
                    <motion.p className={`max-w-sm mb-10 mx-auto ${dtSubtitle}`} variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden">
                        I&apos;m deeply passionate about coding, constantly striving to improve, and adept at creative problem-solving. Every day is a new opportunity to enhance my
                        programming skills and create innovative solutions.
                    </motion.p>

                    {/* download cv */}
                    <div className="flex justify-center xl:justify-start mb-3 xl:mb-5 w-full">
                        <button
                            onClick={handleDownloadCv}
                            style={{ background: "linear-gradient(60deg, rgba(241,48,36,1) 50%, rgba(255,248,0,1) 100%)" }}
                            className="relative z-10 flex justify-center items-center h-[50px] w-[185px] font-medium text-lg text-white cursor-pointer transition rounded-full"
                        >
                            <Typewriter
                                options={{
                                    strings: ["Download CV"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: " ⇣",
                                    // cursor: " ⇩",
                                    // cursor: " ⬇",
                                    // cursor: " ⤓",
                                    // cursor: " ⇓",
                                }}
                            />
                        </button>
                    </div>

                    {/* btn */}
                    <div className={`flex justify-center relative z-10 ${mbBtn}`}>
                        <ProjectsBtn />
                    </div>
                    <motion.div className={`ProjectsBtn relative z-10 hidden ${dtBtn}`} variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden">
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>

            {/* image */}
            <div className="w-[1200px] h-screen absolute right-0 bottom-0">
                {/* bg image */}
                <motion.div
                    variants={fadeIn("up", 0.01)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={`BACKGROUND bg-none w-[1200px] h-screen absolute top-0 left-0 right-0 bottom-0 mix-blend-color-dodge translate-z-0 xl:bg-explosion ${dtBgImage}`}
                ></motion.div>

                {/* particles */}
                <ParticlesLinks />

                {/* avatar img */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={`w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 ${dtAvatar}`}
                >
                    <AvatarRight />
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
