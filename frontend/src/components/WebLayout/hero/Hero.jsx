"use client";

import styles from "@/styles/styles";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[100vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} flex flex-col`}

      // style={{
      //   backgroundImage:
      //     "url(https://media.istockphoto.com/id/2153491899/photo/modern-ecology-sun-energy-batteries-solar-panels-field-for-electricity.webp?a=1&b=1&s=612x612&w=0&k=20&c=YWcl75FmWLHA9OMfrkgb5t2BhCKfRb7PnL86IcZlV_c=)",
      // }}
    >
      <img
        className="h-[100vh] w-full relative z-0"
        src="https://media.istockphoto.com/id/2153491899/photo/modern-ecology-sun-energy-batteries-solar-panels-field-for-electricity.webp?a=1&b=1&s=612x612&w=0&k=20&c=YWcl75FmWLHA9OMfrkgb5t2BhCKfRb7PnL86IcZlV_c="
        alt="home_image"
      />
      <div
        className={`flex flex-col items-center md:pt-28  mx-auto w-[90%] 800px:w-[60%] absolute `}
      >
        <h1
          className={`md:text-[40px] text-primary text-[30px] md:leading-[1.2] leading-[1] text-center font-bold 800px:text-[60px] text-yellow font-[600] capitalize`}
        >
          our One-Stop Marketplace for <br /> Solar Products and Services
        </h1>
        <p className="pt-5 md:text-[22px] font-medium sm:text-[16px] leading-[2] text-black  text-[14px] leading-7 text-center md:py-5  font-[400] text-[#fff]">
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
