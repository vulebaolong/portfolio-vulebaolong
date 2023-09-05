// components
import TestimonialSlider from "@/components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BulbLeft from "@/components/BulbLeft";

function Testimonials() {
    return (
        <section className="h-full bg-primary/30 py-32 text-center">
            <div className="container mx-auto h-full flex flex-col justify-center">
                {/* title */}
                <motion.h2 className="h2 mb-8 xl:mb-0" variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden">
                    What clients <span className="text-accent">say.</span>
                </motion.h2>

                {/* slider */}
                <motion.div variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="">
                    <TestimonialSlider />
                </motion.div>
            </div>

            <BulbLeft />
        </section>
    );
}

export default Testimonials;
