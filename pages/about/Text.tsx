import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

function Text() {
    return (
        <>
            <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
                About <span className="text-accent">me.</span>
            </motion.h2>
            <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 px-2 xl:px-0">
                My determination shines through when I encounter challenges. I persistently invest time in understanding and breaking problems into manageable steps, approaching
                each difficulty as an opportunity for personal growth and advancement.
            </motion.p>
        </>
    );
}
export default Text;
