"use client";

import styles from "@/styles/styles";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[100vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.researchgate.net/publication/337047327/figure/fig1/AS:822068576780288@1573007830610/Example-of-solar-energy-3.jpg)",
      }}
    >
      <div
        className={`flex flex-col items-center  mx-auto w-[90%] 800px:w-[60%]`}
      >
        <h1
          className={`md:text-[40px] text-[30px] leading-[1.2] text-center font-bold 800px:text-[60px] text-yellow font-[600] capitalize`}
        >
          our One-Stop Marketplace for <br /> Solar Products and Services
        </h1>
        <p className="pt-5 md:text-[18px] sm:text-[16px] text-[14px] leading-7 text-center md:py-5  font-[400] text-[#fff]">
          "Explore Solar Bazaar – Your Marketplace for Solar Panels, Inverters,
          Lithium Batteries, <br /> and Accessories. Discover Verified Dealers,
          Skilled Technicians, and DIY Solutions <br /> for Solar Installation.
          Start Your Sustainable Journey Today!"
        </p>
        <Link
          href="/products"
          className="inline-block md:py-10 pt-5 items-center"
        >
          <span className="text-[#fff]  btn hover:bg-yellow/80">Shop Now</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
