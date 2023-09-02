// next link
import Link from "next/link";

// icons
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from "react-icons/ri";

function Socials() {
    const link = `hover:text-accent transition duration-300`;
    return (
        <div className="flex items-center gap-x-5 text-lg">
            <Link href={" "} className={`${link}`}>
                <RiYoutubeLine />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiInstagramLine />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiFacebookLine />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiDribbbleLine />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiBehanceLine />
            </Link>
            <Link href={" "} className={`${link}`}>
                <RiPinterestLine />
            </Link>
        </div>
    );
}
export default Socials;
