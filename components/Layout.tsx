// font
import { Sora } from "@next/font/google";

// font setting
const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className={`page bg-site bg-cover bg-no-repeat text-white ${sora.variable} font-sora relative`}>
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </div>
    );
}
export default Layout;
