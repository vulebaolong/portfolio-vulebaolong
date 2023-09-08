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
                        <div className="hidden sm:block h-[48px]">
                            <Image
                                loader={({ src, width, quality }) => src}
                                src={"https://skillicons.dev/icons?i=ts,react,vue,redux,js,tailwind,bootstrap,python,vite,css,html"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }} // optional
                                alt="iconsSkillFrontEnd"
                                unoptimized
                            />
                        </div>
                        {/* mobile */}
                        <div className="sm:hidden space-y-2">
                            <div className="h-[30px] mx-auto">
                                <Image
                                    loader={({ src, width, quality }) => src}
                                    src={"https://skillicons.dev/icons?i=ts,react,vue,redux,js"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }} // optional
                                    alt="iconsSkillFrontEnd"
                                    unoptimized
                                />
                            </div>
                            <div className="h-[30px] mx-auto">
                                <Image
                                    loader={({ src, width, quality }) => src}
                                    src={"https://skillicons.dev/icons?i=tailwind,bootstrap,python,css,html"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }} // optional
                                    alt="iconsSkillFrontEnd"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </>
                ),
            },
            {
                title: "Back-End Development",
                icons: (
                    <>
                        {/* desktop */}
                        <div className="hidden sm:block">
                            <Image
                                loader={({ src, width, quality }) => src}
                                src={"https://skillicons.dev/icons?i=nodejs,mongodb,nestjs,express,mysql,docker,firebase"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }} // optional
                                alt="iconsSkillBackEnd"
                                unoptimized
                            />
                        </div>
                        {/* mobile */}
                        <div className="sm:hidden">
                            <div className="h-[30px] mx-auto">
                                <Image
                                    loader={({ src, width, quality }) => src}
                                    src={"https://skillicons.dev/icons?i=nodejs,mongodb,nestjs,express,mysql,docker,firebase"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }} // optional
                                    alt="iconsSkillBackEnd"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </>
                ),
            },
            {
                title: "Tool",
                icons: (
                    <>
                        {/* desktop */}
                        <div className="hidden sm:block">
                            <Image
                                loader={({ src, width, quality }) => src}
                                src={"https://skillicons.dev/icons?i=postman,figma,github,git,photoshop,premiere"}
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "100%" }} // optional
                                alt="iconsSkillTool"
                                unoptimized
                            />
                        </div>
                        {/* mobile */}
                        <div className="sm:hidden">
                            <div className="h-[30px] mx-auto">
                                <Image
                                    loader={({ src, width, quality }) => src}
                                    src={"https://skillicons.dev/icons?i=postman,figma,github,git,photoshop,premiere"}
                                    width={0}
                                    height={0}
                                    style={{ width: "100%", height: "100%" }} // optional
                                    alt="iconsSkillTool"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </>
                ),
            },
        ],
    },
    {
        title: "education",
        info: [
            {
                title: (
                    <div className="">
                        <p className="">
                            <span>HONG BANG International University</span>
                            <span>: </span>
                            <span>2018 - 2022</span>
                        </p>
                        <p>
                            <span>Bachelor Of Pharmacist</span>
                            <span> - </span>
                            <span>GPA: 2.83</span>
                        </p>
                    </div>
                ),
                icons: [],
            },
        ],
    },
    {
        title: "certifications",
        info: [
            {
                title: (
                    <>
                        <p>Build Responsive Real-World Websites with HTML and CSS</p>
                        <p className="flex gap-1 items-center justify-center xl:justify-start">
                            <span>Date: 17/11/2022</span>
                            <span> - </span>
                            <a className="flex items-center underline" target="_blank" href="https://www.udemy.com/certificate/UC-48949a43-a312-46e5-bfa9-412197951b45/">
                                <BsLink45Deg />
                                Link
                            </a>
                        </p>
                    </>
                ),
                icons: [],
            },
            {
                title: (
                    <>
                        <p>The Complete JavaScript Course 2023: From Zero to Expert!</p>
                        <p className="flex gap-1 items-center justify-center xl:justify-start">
                            <span>Date: 04/02/2023</span>
                            <span> - </span>
                            <a className="flex items-center underline" target="_blank" href="https://www.udemy.com/certificate/UC-e3493e49-be8a-4233-be46-6e7b6130e892/">
                                <BsLink45Deg />
                                Link
                            </a>
                        </p>
                    </>
                ),
                icons: [],
            },
            {
                title: (
                    <>
                        <p>Node.js, Express, MongoDB & More: The Complete Bootcamp 2023</p>
                        <p className="flex gap-1 items-center justify-center xl:justify-start">
                            <span>Date: 20/05/2023</span>
                            <span> - </span>
                            <a className="flex items-center underline" target="_blank" href="https://www.udemy.com/certificate/UC-d1a1187f-a92e-41ca-85bd-2644aac70191/">
                                <BsLink45Deg />
                                Link
                            </a>
                        </p>
                    </>
                ),
                icons: [],
            },
        ],
    },
];

// icons
import { BsLink45Deg } from "react-icons/bs";

import Image from "next/image";
import { useState } from "react";

function Info() {
    const [index, setIndex] = useState(0);

    return (
        <>
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
        </>
    );
}
export default Info;
