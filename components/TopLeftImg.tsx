// next imgage
import Image from "next/image";

function TopLeftImg() {
    const dt = `xl:w-[400px]`;
    return (
        <div className={`absolute left-0 top-0 mix-blend-color-dodge z-0 w-[200px] opacity-50 ${dt}`}>
            <Image
                src={"/top-left-img.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="top-left-img"
                priority={true}
            />
            {/* <Image src="/top-left-img.png" width={400} height={400} alt="top-left-img" priority={true} /> */}
        </div>
    );
}

export default TopLeftImg;
