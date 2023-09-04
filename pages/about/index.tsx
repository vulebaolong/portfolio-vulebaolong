import { useState } from "react";
import CountUp from "react-countup";

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";

import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// component
import ParticlesTriangles from "@/components/ParticlesTriangles";
import CirclesRight from "@/components/CirclesRight";
import AvatarLeft from "@/components/AvatarLeft";

//  data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Front-End Development",
                icons: (
                    <>
                        {/* desktop */}
                        <img className="hidden sm:block" src="https://skillicons.dev/icons?i=ts,react,vue,redux,js,tailwind,bootstrap,python,vite,css,html" />
                        {/* mobile */}
                        <div className="sm:hidden">
                            <img className="h-[30px] mx-auto" src="https://skillicons.dev/icons?i=ts,react,vue,redux,js,tailwind,bootstrap,python,css,html" />
                        </div>
                    </>
                ),
            },
            {
                title: "Back-End Development",
                icons: (
                    <>
                        {/* desktop */}
                        <img className="hidden sm:block" src="https://skillicons.dev/icons?i=nodejs,mongodb,nestjs,express,mysql,docker,firebase" />
                        {/* mobile */}
                        <div className="sm:hidden">
                            <img className="h-[30px] mx-auto" src="https://skillicons.dev/icons?i=nodejs,mongodb,nestjs,express,mysql,docker,firebase" />
                        </div>
                    </>
                ),
            },
            {
                title: "Tool",
                icons: (
                    <>
                        {/* desktop */}
                        <img className="hidden sm:block" src="https://skillicons.dev/icons?i=postman,figma,github,git,photoshop,premiere" />
                        {/* mobile */}
                        <div className="sm:hidden">
                            <img className="h-[30px] mx-auto" src="https://skillicons.dev/icons?i=postman,figma,github,git,photoshop,premiere" />
                        </div>
                    </>
                ),
            },
        ],
    },
    {
        title: "awards",
        info: [
            {
                title: "Webby Awards - Honoree - 2011 - 2012",
                icons: [],
            },
            {
                title: "Adobe Design Achievement Awards - Finalist - 2009 - 2010",
                icons: [],
            },
        ],
    },
    {
        title: "experience",
        info: [
            {
                title: "UX/UI Designer - XYZ Company - 2012 - 2023",
                icons: [],
            },
            {
                title: "Web Developer - ABC Agency - 2010 - 2012",
                icons: [],
            },
            {
                title: "Intern - DEF Corporation - 2008 - 2010",
                icons: [],
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Web Development - ABC University, LA, CA - 2011",
                icons: [],
            },
            {
                title: "Computer Science Diploma - AV Technical Institute - 2009",
                icons: [],
            },
            {
                title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA - 2006",
                icons: [],
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);
    const dtAvatar = `lg:bottom-0 lg:-left-56`;

    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
            <CirclesRight />

            <div className="w-[1200px] h-screen absolute right-0 bottom-0">
                <ParticlesTriangles />
            </div>

            {/* avatar img */}
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={`w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32  ${dtAvatar}`}
            >
                <AvatarLeft />
            </motion.div>

            {/* body */}
            <div className="container relative mx-auto h-full flex flex-col xl:flex-row gap-x-6 xl:pt-20">
                {/* text */}
                <div className="flex-1 flex flex-col ">
                    <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
                        Why hire me for your next <span className="text-accent">project?</span>
                    </motion.h2>
                    <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                        10 years ago, I began freelancing as a developer. Since then, Ive done remote work for consumer use
                    </motion.p>

                    {/* counter */}
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                    >
                        <div className="flex flex-1 xl:gap-x-6">
                            {/* experience */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={10} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
                            </div>

                            {/* clients */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={250} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
                            </div>

                            {/* project finish */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={650} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
                            </div>

                            {/* awards */}
                            <div className="relative flex-1 ">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={8} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* info */}
                <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    className={`${
                                        index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    key={itemIndex}
                                    onClick={() => {
                                        setIndex(itemIndex);
                                    }}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div className="flex flex-1 flex-col max-w-max gap-x-2 text-white/60" key={itemIndex}>
                                    {/* title */}
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                    <div className="">{item.icons}</div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
