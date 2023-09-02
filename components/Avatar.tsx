// next image
import Image from "next/image";

function Avatar() {
    return <div className="hidden xl:flex xl:max-w-none">
      <Image className="translate-z-0 w-full h-full" src={'/avatar.png'} width={737} height={678} alt="avatar"/>
    </div>;
}
export default Avatar;
