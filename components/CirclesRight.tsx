// next image
import Image from "next/image";

function CirclesRight() {
    return (
        <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
            <Image src={"/circlesRight.png"} width={260} height={200} className="w-full h-full" alt="circlesRight" />
        </div>
    );
}
export default CirclesRight;
