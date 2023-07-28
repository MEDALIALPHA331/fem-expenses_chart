import React from "react";
import BarChart from "./(components)/barChart";
import logo from "@/app/expchart/(assets)/logo.svg";
import Image from "next/image";

import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BalanceData = 921.48;
const MonthBalanceData = 478.33;
const ProgressionData = 2.4;

const MainContainerWidth =
  "sm:min-w-[350px] md:min-w-[34vw] lg:min-w-[50vw] xl:md:min-w-[34vw]";

function ExpansesChart() {
  return (
    <div
      className={`min-h-screen grid place-content-center bg-ec-neutral-cream dark:bg-slate-900 text-slate-950 dark:text-ec-neutral-cream text-lg p-4 md:p-0 ${DmSans.className} font-normal`}
    >
      <div
        className={`${MainContainerWidth} min-h-[66vh] md:gap-8  gap-4 flex flex-col`}
      >
        <div className="w-full flex items-center justify-between bg-ec-primary-soft-red min-h-[128px]  py-2 px-8 rounded-[20px]">
          <div className="text-ec-neutral-very-pale-orange">
            <h3 className="opacity-70">My Balance</h3>
            <h1 className="font-bold text-xl md:text-4xl">{`$${BalanceData}`}</h1>
          </div>

          <div>
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>
        </div>

        <div className="flex-grow md:px-8 px-4 md:py-7 py-6 md:gap-8 gap-4 flex flex-col bg-ec-neutral-very-pale-orange rounded-[20px]">
          <h1 className="font-bold text-slate-950 text-xl md:text-3xl">
            Spending - Last 7 days
          </h1>

          <div className="py-4 border-b-[1px] flex-grow h-[300px] border-slate-300">
            <BarChart />
          </div>

          <div className="flex items-center justify-between mt-auto pb-1 md:pb-4">
            <div className="flex flex-col items-center">
              <div className="text-slate-600 text-xs md:text-base">
                Total This Month
              </div>
              <div className="text-slate-950 font-bold md:text-4xl text-2xl">{`$${MonthBalanceData}`}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-ec-neutral-dark-brown text-base md:text-xl">{`+${ProgressionData}`}</div>
              <div className="text-slate-600 text-xs md:text-base">
                from last month
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpansesChart;
