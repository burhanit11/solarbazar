"use client";
import styles from "@/styles/styles";
import { AiOutlineSearch } from "react-icons/ai";

const InstallationServices = () => {
  return (
    <div className="md:flex xs:block z-0 ">
      <div className="md:w-[20%] xs:w-full relative bg-white h-[100vh] px-5 rounded-t-lg md:fixed ">
        {/* search box */}
        {/* search box */}
        <div className="w-full my-5 relative">
          <input
            type="text"
            placeholder="Installation Services..."
            className="h-[40px] w-full px-2 border-[#ffbb38] border-[2px] rounded-md"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
        </div>
        <h2 className="text-lg font-medium ">Where</h2>
        <div className=" relative mb-5 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53519.22926249876!2d70.70351360000001!3d33.031399549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1732959663733!5m2!1sen!2s"
            width="210"
            height="150"
            // style="border:0;"
            className="rounded-md"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <button className="btn w-full">Search</button>
      </div>
      <div className="md:ml-[20%] md:w-[80%] xs:w-full h-[100vh]">
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} py-10 text-center text-[25px] font-[500] border-b `}
          >
            Installation Services
          </h2>
          <div className="grid grid-cols-1 gap-[20px] mt-10 md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12"></div>
        </div>
      </div>
      {/* {productData ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} my-10 text-start text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] mt-10 md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {productData &&
              productData.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default InstallationServices;
