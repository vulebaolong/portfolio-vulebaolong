// next link
import Link from "next/link";

import Image from "next/image";

function Logo() {
    return (
        <Link href={"/"}>
            <Image src={"/logo1.svg"} width={150} height={35} alt="logo" />
        </Link>
    );
}
export default Logo;
