// next image
import Image from "next/image";

function AvatarLeft() {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image
                className="translate-z-0"
                src={"/avatarLeft.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="avatar"
            />
        </div>
    );
}
export default AvatarLeft;
