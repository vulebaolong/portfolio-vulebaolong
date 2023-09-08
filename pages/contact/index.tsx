// components
import BulbLeft from "@/components/Bulb/BulbLeft";
import FormContact from "./FormContact";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function Contact() {
    return (
        <section className="pt-[137px] pb-[137px] xl:pt-[90px] xl:pb-0 min-h-screen h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
            <BulbLeft />

            {/* text & form */}
            <div className="container mx-auto text-center xl:text-left xl:pt-20">
                <div className="w-full max-w-[700px] mx-auto">
                    {/* text */}
                    <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-12">
                        Lets <span className="text-accent">connect.</span>
                    </motion.h2>

                    {/* form */}
                    <motion.div className="" variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden">
                        <FormContact />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
