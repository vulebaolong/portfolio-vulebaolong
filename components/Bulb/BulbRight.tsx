// next Image
import Image from "next/image";

function BulbRight() {
    return (
        <div className="fixed right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-0 w-[80px] xl:w-[120px]">
            {/* <Image src={"/bulb.png"} width={260} height={200} className="w-full h-full" alt="bulb" /> */}
            <Image
                src={"/bulb_right.png"}
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
export default BulbRight;
