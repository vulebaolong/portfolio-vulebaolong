import { useState } from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { wrap } from "popmotion";
import { motion, AnimatePresence } from "framer-motion";

// next image
import Image from "next/image";

// data
const workSlides: { title: string; path: string; logo: string; link: string }[] = [
    {
        title: "Netflix",
        logo: "/logo_Netflix.png",
        path: "/thumb1.jpg",
        link: "https://netflix-vulebaolong.netlify.app/",
    },
    {
        title: "L9 Learning",
        logo: "/logo_L9Learning.png",
        path: "/thumb2.jpg",
        link: "https://l9-learning-vulebaolong.netlify.app/",
    },
    {
        title: "API Netflix",
        logo: "/logo_Netflix.png",
        path: "/thumb3.jpg",
        link: "https://netflix-vulebaolong.netlify.app/api",
    },
    {
        title: "API L9 Learning",
        logo: "/logo_L9Learning.png",
        path: "/thumb4.jpg",
        link: "https://l9-learning-vulebaolong.netlify.app/api",
    },
];

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

function ProjectSlider() {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 workSlides, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, workSlides.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const btnSlider =
        "absolute flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 w-[40px] h-[40px] z-[2] font-bold text-[25px] text-black bg-white hover:bg-white/80 active:bg-white/60 cursor-pointer transition";
    return (
        <>
            {/* slider */}
            <div className="relative w-full h-full group">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        className=" cursor-pointer w-full h-full absolute rounded-lg overflow-hidden flex items-center justify-center"
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <a target="_blank" href={workSlides[imageIndex].link} className="w-full h-full flex items-center justify-center overflow-hidden xl:group">
                            <Image
                                src={workSlides[imageIndex].path}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                                alt="imgSlideWork"
                                priority={true}
                            />
                            {/* overlay gradient */}
                            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent via-[#e838cc] to-[#4a22bd] opacity-50 xl:opacity-0 group-hover:xl:opacity-80 transition-all duration-700"></div>

                            {/* title */}
                            <div className="absolute bottom-0 xl:translate-y-full -translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                    {/* title 1 */}
                                    <div className="delay-100">LIVE</div>

                                    {/* title 2 */}
                                    <div className="xl:translate-y-[500%] group-hover:xl:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>

                                    {/* icon */}
                                    <div className="text-xl xl:translate-y-[500%] group-hover:xl:translate-y-0 transition-all duration-300 delay-200">
                                        <BsArrowRight />
                                    </div>
                                </div>
                                {/* name project */}
                                <div className="text-xl flex items-center gap-1 font-medium xl:translate-y-[500%] group-hover:xl:translate-y-0 transition-all duration-300 delay-250">
                                    <div className="h-[26px] aspect-square">
                                        <Image
                                            src={workSlides[imageIndex].logo}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                                            alt="imgSlideWork"
                                            priority={true}
                                        />
                                    </div>
                                    <span className="leading-none">{workSlides[imageIndex].title}</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </AnimatePresence>
                {/* btn next */}
                <div className={`right-2 ${btnSlider}`} onClick={() => paginate(1)}>
                    ‣
                </div>
                {/* btn prev */}
                <div className={`left-2 -scale-[1] ${btnSlider}`} onClick={() => paginate(-1)}>
                    ‣
                </div>
            </div>
            {/* pani */}
            <p className="text-center mt-2">
                {imageIndex + 1} / {workSlides.length}
            </p>
        </>
    );
}

export default ProjectSlider;
