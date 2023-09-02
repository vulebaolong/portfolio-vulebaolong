// next imgage
import Image from "next/image";

const TopLeftImg = () => {

    const dt = `xl:w-[400px]`
    return (
        <div className={`absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] opacity-50 ${dt}`}>
            <Image src="/top-left-img.png" width={400} height={400} alt="top-left-img" />
        </div>
    );
};

export default TopLeftImg;
