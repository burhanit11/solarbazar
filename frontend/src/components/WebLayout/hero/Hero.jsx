"use client";

import styles from "@/styles/styles";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.elecnonewenergy.com/wp-content/themes/elecnopcwp/images/probanner.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[40px] leading-[1.2] font-bold 800px:text-[60px] text-yellow font-[600] capitalize`}
        >
          Best Collection for <br /> Solar Panel
        </h1>
        <p className="pt-5 text-[16px] w-[50%] font-[400] text-[#fff]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link href="/products" className="inline-block">
          <div className={`${styles.button} mt-7 `}>
            <span className="text-[#fff] btn hover:bg-yellow/80">Shop Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
