// next image
import Image from "next/image";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";

function ProjectsBtn() {
    const dtBtn = `xl:mx-0`;
    return (
        <div className={`mx-auto ${dtBtn}`}>
            <Link
                href={"/work"}
                className="relative sm:p-5 p-3 w-[120px] h-[120px] sm:w-[185px] sm:h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
            >
                <Image src={"/rounded-text.png"} width={141} height={148} alt="rounded-text" className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />
                <HiArrowRight className="absolute text-2xl sm:text-4xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
        </div>
    );
}
export default ProjectsBtn;
