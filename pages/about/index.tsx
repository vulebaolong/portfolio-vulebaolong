import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { differenceInDays, parseISO, differenceInYears } from "date-fns";

// axios
import axios from "axios";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

// component
import ParticlesTriangles from "@/components/ParticlesTriangles";
import CirclesRight from "@/components/CirclesRight";
import AvatarLeft from "@/components/AvatarLeft";

// constants
import { USERNAME_GITHUB } from "@/constants/configConstants";
import Info from "@/components/Info";

export interface I_infoGithub {
    totalRepo: number;
    daysDifference: number;
    yearsDifference: number;
}

const About = () => {
    const dtAvatar = `lg:bottom-0 lg:-left-56`;

    const [infoGithub, setInfoGithub] = useState<I_infoGithub>({
        totalRepo: 0,
        daysDifference: 0,
        yearsDifference: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.github.com/users/${USERNAME_GITHUB}`);

            // Chuyển đổi created_at thành đối tượng ngày
            const createdAtDate = parseISO(data.created_at);

            // Lấy ngày hiện tại
            const currentDate = new Date();

            // Tính số ngày từ lúc tạo tài khoản github
            const daysDifference = differenceInDays(currentDate, createdAtDate);

            // Tính số năm từ lúc tạo tài khoản github
            const yearsDifference = differenceInYears(currentDate, createdAtDate);

            setInfoGithub({
                totalRepo: data.public_repos,
                daysDifference,
                yearsDifference,
            });
        };
        fetchData();
    }, []);

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
                    <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
                        About <span className="text-accent">me.</span>
                    </motion.h2>
                    <motion.p variants={fadeIn("right", 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-12 px-2 xl:px-0">
                        My determination shines through when I encounter challenges. I persistently invest time in understanding and breaking problems into manageable steps,
                        approaching each difficulty as an opportunity for personal growth and advancement.
                    </motion.p>

                    {/* counter */}
                    <motion.div
                        variants={fadeIn("right", 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="hidden md:block w-[500px] mx-auto xl:mx-0 mb-8"
                    >
                        <div className="flex w-full h-full xl:gap-x-6 justify-between xl:justify-start">
                            {/* years of experience */}
                            <div className="">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={infoGithub?.yearsDifference} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                                    <span>years of</span>
                                    <br />
                                    <span>experience</span>
                                </div>
                            </div>

                            <div className="w-[1px] h-full bg-white/30"></div>

                            {/* day of experience */}
                            <div className="">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={infoGithub?.daysDifference} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                                    <span>day of</span>
                                    <br />
                                    <span>experience</span>
                                </div>
                            </div>

                            <div className="w-[1px] h-full bg-white/30"></div>

                            {/* Total Repositories */}
                            <div className="">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={infoGithub?.totalRepo} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                                    <span>Total</span>
                                    <br />
                                    <span>Repositories</span>
                                </div>
                            </div>
                        </div>
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
