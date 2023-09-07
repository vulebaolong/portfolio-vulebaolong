// next image
import Image from "next/image";

function CirclesRight() {
    return (
        <div className="w-[120px] xl:w-[200px] fixed right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75 z-10">
            <Image
                src={"/circlesRight.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="circlesRight"
                priority={true}
            />
        </div>
    );
}
export default CirclesRight;
