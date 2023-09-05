// next image
import Image from "next/image";

function CirclesLeft() {
    return (
        <div className="w-[200px] xl:w-[300px] absolute -left-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
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
