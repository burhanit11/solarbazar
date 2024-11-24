import React from "react";
import styles from "../../styles/styles";
import { sponsoredData } from "@/static/data";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      {/* {sponsoredData.map((item) => (
        <Image key={item.id} src={item.logo_Url} height={50} width={50} />
      ))} */}

      <div className="flex justify-between w-full">
        {sponsoredData.map((item) => (
          <div key={item.id} className="flex items-start">
            <img
              src={item.logo_Url}
              style={{ width: "150px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsored;
