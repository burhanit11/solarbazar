import React, { useEffect } from "react";
import { navItems } from "@/routes/routes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ active }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => router.pathname === path;

  console.log(isActive, "????????");
  return (
    <div className={`md:flex xs:block `}>
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="xs:pb-3 md:pb-0">
            {console.log(active + 1, index, "Ac>>>>>>>>")}
            <Link
              href={item.url}
              className={`${
                isActive === true
                  ? "text-[#ffbb38] font-[400]"
                  : "md:text-white font-[400] xs:text-black"
              }  font-[400] px-2 cursor-pointer}`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
