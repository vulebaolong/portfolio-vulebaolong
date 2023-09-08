// components
import Socials from "./Socials";
import Logo from "./Logo";

function Header() {
    const dtHeader = `xl:px-0 xl:h-[90px]`;
    return (
        <header className={`absolute z-30 w-full flex items-center px-16 ${dtHeader}`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 py-7 xl:py-0">
                    {/* logo */}
                    <Logo />

                    {/* social */}
                    <Socials />
                </div>
            </div>
        </header>
    );
}
export default Header;
