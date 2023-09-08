// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from "react-icons/hi2";

// nav data
export const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/about", icon: <HiUser /> },
    // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "Project", path: "/project", icon: <HiViewColumns /> },
    // {
    //     name: "Testimonials",
    //     path: "/testimonials",
    //     icon: <HiChatBubbleBottomCenterText />,
    // },
    {
        name: "Contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";
import { Tooltip } from "antd";

function Nav() {
    const router = useRouter();
    const pathname = router.pathname;

    const dtNav = `xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen`;
    const dtNav_div = `xl:flex-col xl:text-xl `;
    return (
        <nav className={`bottom-3 flex flex-col items-center fixed z-50 w-full ${dtNav}`}>
            {/* inner */}
            <div className={`flex text-2xl w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[70px] sm:h-[70px] xl:h-[280px] items-center justify-around rounded-full  bg-white/10 backdrop-blur-sm  ${dtNav_div}`}>
                {navData.map((link, index) => {
                    return (
                        <div key={index}>
                            <Tooltip className="hidden xl:flex" title={link.name} placement="left">
                                <Link className={`${link.path === pathname && "text-accent"} relative flex items-center hover:text-accent transition`} href={link.path}>
                                    {/* icon */}
                                    <div>{link.icon}</div>
                                </Link>
                            </Tooltip>
                            <Link className={`${link.path === pathname && "text-accent"}  xl:hidden relative flex items-center hover:text-accent transition`} href={link.path}>
                                {/* icon */}
                                <div>{link.icon}</div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}

export default Nav;
