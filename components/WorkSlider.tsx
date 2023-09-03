// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// requiered module
import { Pagination } from "swiper/modules";

// data
const workSlides: { title: string; path: string }[] = [
    {
        title: "title",
        path: "/thumb1.jpg",
    },
    {
        title: "title",
        path: "/thumb2.jpg",
    },
    {
        title: "title",
        path: "/thumb3.jpg",
    },
    {
        title: "title",
        path: "/thumb4.jpg",
    },
    {
        title: "title",
        path: "/thumb4.jpg",
    },
    {
        title: "title",
        path: "/thumb1.jpg",
    },
    {
        title: "title",
        path: "/thumb2.jpg",
    },
    {
        title: "title",
        path: "/thumb3.jpg",
    },
];

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

function WorkSlider() {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[520px] !pb-10"
        >
            {workSlides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div key={index} className="cursor-pointer w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center group">
                            <div className="w-full h-full flex items-center justify-center overflow-hidden group">
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
                                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                                {/* title */}
                                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                        {/* title 1 */}
                                        <div className="delay-100">LIVE</div>

                                        {/* title 2 */}
                                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>

                                        {/* icon */}
                                        <div className="ttext-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                            <BsArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default WorkSlider;
