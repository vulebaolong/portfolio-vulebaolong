// icons
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from "react-icons/hi2";

// nav data
export const navData = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "work", path: "/work", icon: <HiViewColumns /> },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: "contact",
        path: "/contact",
        icon: <HiEnvelope />,
    },
];

// next link
import Link from "next/link";

// next router
import { useRouter } from "next/router";

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
                        <Link className={`${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition`} href={link.path} key={index}>
                            {/* tooltip */}
                            <div className={`absolute mr-14 right-0 hidden ${dtTooltip}`}>
                                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                    <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                                </div>
                                {/* triangle */}
                                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute left-full top-1/2 -translate-y-1/2"></div>
                            </div>

                            {/* icon */}
                            <div>{link.icon}</div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default Nav;
