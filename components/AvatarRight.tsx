// next image
import Image from "next/image";

function AvatarRight() {
    return (
        <div className="hidden xl:flex xl:max-w-none">
            <Image
                className="translate-z-0"
                src={"/avatarRight.png"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // optional
                alt="avatar"
                priority={true}
            />
        </div>
    );
}
export default AvatarRight;
