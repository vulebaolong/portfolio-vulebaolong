import { useEffect, useState } from "react";

// date-fn
import { differenceInDays, parseISO, differenceInYears } from "date-fns";

// count up
import CountUp from "react-countup";

// constants
import { USERNAME_GITHUB } from "@/constants/configConstants";

// axios
import axios from "axios";

export interface I_infoGithub {
    totalRepo: number;
    daysDifference: number;
    yearsDifference: number;
}

function Counter() {
    const [infoGithub, setInfoGithub] = useState<I_infoGithub>({
        totalRepo: 0,
        daysDifference: 0,
        yearsDifference: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.github.com/users/${USERNAME_GITHUB}`);

            // Chuyển đổi created_at thành đối tượng ngày
            const createdAtDate = parseISO(data.created_at);

            // Lấy ngày hiện tại
            const currentDate = new Date();

            // Tính số ngày từ lúc tạo tài khoản github
            const daysDifference = differenceInDays(currentDate, createdAtDate);

            // Tính số năm từ lúc tạo tài khoản github
            const yearsDifference = differenceInYears(currentDate, createdAtDate);

            setInfoGithub({
                totalRepo: data.public_repos,
                daysDifference,
                yearsDifference,
            });
        };
        fetchData();
    }, []);
    return (
        <div className="flex w-full h-full justify-evenly xl:justify-between items-center flex-wrap gap-5">
            {/* years of experience */}
            <div >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={infoGithub?.yearsDifference} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                    <span>years of</span>
                    <br />
                    <span>experience</span>
                </div>
            </div>

            <div className="hidden sm:block w-[1px] h-[80px] bg-white/20"></div>

            {/* day of experience */}
            <div >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={infoGithub?.daysDifference} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                    <span>day of</span>
                    <br />
                    <span>experience</span>
                </div>
            </div>

            <div className="hidden sm:block w-[1px] h-[80px] bg-white/20"></div>

            {/* Total Repositories */}
            <div >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={infoGithub?.totalRepo} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                    <span>Total</span>
                    <br />
                    <span>Repositories</span>
                </div>
            </div>
        </div>
    );
}
export default Counter;
