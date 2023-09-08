// next image
import Image from "next/image";

function CirclesLeft() {
    return (
        <div className="w-[140px] xl:w-[200px] fixed left-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-0">
            <Image
                src={"/circlesLeft.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="circlesLeft"
                priority={true}
            />
        </div>
    );
}
export default CirclesLeft;
