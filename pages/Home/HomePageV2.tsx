import { fadeIn } from "@/variants";
import ProjectsBtn from "./ProjectsBtn";
import ParticlesLinks from "@/components/Particles/ParticlesLinks";
import AvatarRight from "@/components/Avatar/AvatarRight";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function HomePageV2() {
    const handleDownloadCv = () => {
        console.log(123);
        // https://drive.google.com/u/0/uc?id=1kjlBbByUWDnSdj5kQHL57gK18BIuO7MO&export=download
        // window.open("https://drive.google.com/u/0/uc?id=1kjlBbByUWDnSdj5kQHL57gK18BIuO7MO&export=download", "_blank");
        window.open("https://drive.google.com/file/d/1kjlBbByUWDnSdj5kQHL57gK18BIuO7MO/view?usp=drive_link", "_blank");
    };

    const dtSubtitle = `xl:max-w-xl xl:mx-0 xl:mb-16`;
    const mbBtn = `xl:hidden`;
    const dtBtn = `xl:inline-block`;
    const dtBgImage = `hidden xl:block`;
    return (
        <section className="pt-[137px] pb-[137px] xl:pt-[90px] xl:pb-0 h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
            {/* text */}
            <div className={`container mx-auto text-center xl:h-full flex flex-col justify-center items-center`}>
                {/* title */}
                <div className="">
                    <motion.h2 className="md:text-2xl text-white/60 mb-5" variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden">
                        Hi, I am <span className="text-accent font-bold"> VU LE BAO LONG</span>
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
                <div className="flex justify-center mb-3 xl:mb-5 w-full">
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

            {/* image */}
            <div className="w-full h-full absolute top-0 left-0">
                {/* bg image */}
                <motion.div
                    variants={fadeIn("up", 0.01)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={`BACKGROUND !opacity-50 blur-[5px] w-full h-full absolute mix-blend-color-dodge translate-z-0 bg-explosion bg-cover
                    bg-bottom
                    bg-no-repeat ${dtBgImage}`}
                ></motion.div>

                {/* particles */}
                <ParticlesLinks />
            </div>
        </section>
    );
}
export default HomePageV2;
