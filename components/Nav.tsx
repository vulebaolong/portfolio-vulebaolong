// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from "react-icons/hi2";

// nav data
export const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/about", icon: <HiUser /> },
    // { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "Work", path: "/work", icon: <HiViewColumns /> },
    {
        name: "Testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
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
    const dtNav_div = `xl:flex-col md:px-40 xl:px-0 xl:h-max xl:text-xl xl:rounded-full justify-center`;
    const dtTooltip = `xl:group-hover:flex`;
    return (
        <nav className={`flex flex-col items-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 top-0 w-full ${dtNav}`}>
            {/* inner */}
            <div className={`flex w-full items-center justify-between gap-y-10 px-4 py-8 h-[80px] bg-white/10 backdrop-blur-sm text-3xl ${dtNav_div}`}>
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
