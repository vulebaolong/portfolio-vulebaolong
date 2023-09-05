// next Image
import Image from "next/image";

function BulbLeft() {
    return (
        <div className="absolute -left-36 -bottom-44 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-0 w-[200px] xl:w-[260px]">
            <Image
                src={"/bulb.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="bulb"
                priority={true}
            />
        </div>
    );
}
export default BulbLeft;
