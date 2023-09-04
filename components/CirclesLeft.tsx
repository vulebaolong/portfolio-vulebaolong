// next image
import Image from "next/image";

function CirclesLeft() {
    return (
        <div className="w-[200px] xl:w-[300px] absolute -left-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
            <Image src={"/circlesLeft.png"} width={260} height={200} className="w-full h-full" alt="circlesLeft" />
        </div>
    );
}
export default CirclesLeft;
