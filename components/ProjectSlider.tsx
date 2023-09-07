// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// requiered module
import { Pagination } from "swiper/modules";

// data
const workSlides: { title: string; path: string; logo: string, link: string }[] = [
    {
        title: "Netflix",
        logo: "/logo_Netflix.png",
        path: "/thumb1.jpg",
        link: "https://netflix-vulebaolong.netlify.app/"
    },
    {
        title: "L9 Learning",
        logo: "/logo_l9learning.png",
        path: "/thumb2.jpg",
        link: "https://l9-learning-vulebaolong.netlify.app/"
    },
    {
        title: "API Netflix",
        logo: "/logo_Netflix.png",
        path: "/thumb3.jpg",
        link: "https://netflix-vulebaolong.netlify.app/api"
    },
    {
        title: "API L9 Learning",
        logo: "/logo_l9learning.png",
        path: "/thumb4.jpg",
        link: "https://l9-learning-vulebaolong.netlify.app/api"
    },
];

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

function ProjectSlider() {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className=" sm:h-[520px] !pb-10"
        >
            {workSlides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div key={index} className="cursor-pointer w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center group">
                            <a target="_blank" href={slide.link} className="w-full h-full flex items-center justify-center overflow-hidden xl:group">
                                {/* image */}
                                <Image
                                    src={slide.path}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                                    alt="imgSlideWork"
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
                                        <div className="h-[26px]">
                                            <Image
                                                src={slide.logo}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                                                alt="imgSlideWork"
                                            />
                                        </div>
                                        <span className="leading-none">{slide.title}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default ProjectSlider;
