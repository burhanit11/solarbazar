import React, { useEffect } from "react";
import styles from "@/styles/styles";
import { navItems } from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = ({ active }) => {
  const router = useRouter();

  useEffect(() => {
    console.log("Route changed:", router.pathname);
    // Trigger updates based on route changes
  }, [router.pathname]);
  return (
    <div className={`md:flex xs:block `}>
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="xs:pb-3 md:pb-0">
            <Link
              href={item.url}
              className={`${
                active === index + 1
                  ? "text-[#ffbb38] font-[500]"
                  : "md:text-white xs:text-black"
              }  font-[500] px-2 cursor-pointer}`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
