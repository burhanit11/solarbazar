import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Navbar from "./Navbar";
import styles from "@/styles/styles";
import DropDown from "./DropDown";
import { categoriesData } from "@/static/data";
import Link from "next/link";

const Header = ({ activeHeading }) => {
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className="bg-bgHeadColor flex justify-between py-5 mx-10">
        <div>
          <h1 className="text-5xl font-bold text-lightBlue">
            Solar<span className="text-yellow">Bazar</span>
          </h1>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            // value={searchTerm}
            // onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-yellow border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
        </div>
        <div>
          <Link href={"/create-shop"}>
            <h3 className="btn hover:bg-yellow/80">Become Seller</h3>
          </Link>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0  left-0 z-10" : null
        }
         transition  800px:flex items-center justify-between w-full bg-lightBlue h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between items-center `}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px]   w-[270px]  1000px:block mx-10">
              <BiMenuAltLeft size={30} className="absolute top-5 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-16 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-4 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={"flex items-center"}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#ffbb38] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {wishlist && wishlist.length} */}3
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#ffbb38] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {/* {cart && cart.length} */}2
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link href="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              </div>
            </div>

            {/* cart popup */}
            {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

            {/* wishlist popup */}
            {/* {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
