// components
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ParticlesColors from "@/components/ParticlesColors";

function Work() {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <div className="w-full h-screen absolute right-0 bottom-0 z-0">
                <ParticlesColors />
            </div>

            <Circles />

            <div className="container mx-auto relative">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    {/* text */}
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
                        <motion.h2 variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden" className="h2 xl:mt-8">
                            My work <span className="text-accent">.</span>
                        </motion.h2>
                        <motion.p variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, assumenda cum! Accusamus aspernatur obcaecati excepturi at temporibus doloribus
                            cupiditate dolorum.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden" className="w-full xl:max-w-[65%]">
                        {/* slider */}
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>

            <Bulb />
        </div>
    );
}

export default Work;
