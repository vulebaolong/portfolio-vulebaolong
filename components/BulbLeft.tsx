// next Image
import Image from "next/image";

function BulbLeft() {
    return (
        <div className="fixed left-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-0 w-[80px] xl:w-[120px]">
            <Image
                src={"/bulb_left.png"}
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
