// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// component
import ParticlesTriangles from "@/components/Particles/ParticlesTriangles";
import CirclesRight from "@/components/Circles/CirclesRight";
import AvatarLeft from "@/components/Avatar/AvatarLeft";
import Info from "./Info";
import Counter from "./Counter";
import Text from "./Text";

const About = () => {
    const dtAvatar = `lg:bottom-0 lg:-left-56`;

    return (
        <section className="pt-[137px] pb-[137px] xl:pt-[90px] xl:pb-0 min-h-screen h-full text-center xl:text-left bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
            <CirclesRight />

            <div className="w-full h-full sm:w-[1200px] sm:h-screen absolute right-0 bottom-0">
                <ParticlesTriangles />
            </div>

            {/* avatar img */}
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={`hidden sm:block w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0  ${dtAvatar}`}
            >
                <AvatarLeft />
            </motion.div>

            {/* body */}
            <div className="container relative mx-auto h-full flex flex-col xl:flex-row gap-x-6 xl:pt-20">
                {/* text and counter */}
                <div className="flex-1 flex flex-col ">
                    {/* text */}
                    <div className=" mb-5 xl:mb-12">
                        <Text />
                    </div>

                    {/* counter */}
                    <motion.div variants={fadeIn("right", 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:block w-[500px] mx-auto xl:mx-0">
                        <Counter />
                    </motion.div>
                </div>

                {/* info */}
                <motion.div variants={fadeIn("left", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%]">
                    <Info />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
