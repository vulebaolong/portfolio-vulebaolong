// next link
import Link from "next/link";

// icons
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

function Socials() {
    const link = `hover:text-accent transition duration-300`;
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link  target="_blank" rel="noopener noreferrer" href={"https://github.com/vulebaolong"} className={`${link}`}>
                <BsGithub className="text-2xl" />
            </Link>
            <Link  target="_blank" rel="noopener noreferrer" href={"https://linkedin.com/in/vulebaolong"} className={`${link}`}>
                <BsLinkedin className="text-2xl" />
            </Link>
            <Link  target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/profile.php?id=100073114167973"} className={`${link}`}>
                <BsFacebook className="text-2xl" />
            </Link>
            {/* <Link href={" "} className={`${link}`}>
                <RiYoutubeLine className="text-2xl" />
            </Link> */}
            {/* <Link href={" "} className={`${link}`}>
                <RiDribbbleLine className="text-2xl" />
            </Link> */}
            {/* <Link href={" "} className={`${link}`}>
                <RiBehanceLine className="text-2xl" />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiPinterestLine className="text-2xl" />
            </Link> */}
        </div>
    );
}
export default Socials;
