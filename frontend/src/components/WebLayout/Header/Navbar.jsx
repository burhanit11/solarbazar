import { navItems } from "@/static/data";
import styles from "@/styles/styles";
import Link from "next/link";
import React from "react";

const Navbar = ({ active }) => {
  return (
    <div className={`flex items-center 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index}>
            <Link
              href={i.url}
              className={`${
                active === index + 1
                  ? "text-yellow font-bold"
                  : "text-[#fff] 800px:text-[#fff]"
              }   800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
