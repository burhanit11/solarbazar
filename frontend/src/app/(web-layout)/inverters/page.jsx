import { invertersData } from "@/static/data";
import React from "react";

const Inverters = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      {invertersData.map((item) => (
        <div key={item.id} className=" flex  flex-col items-center mx-5">
          <div className="md:flex md:flex-row xs:block my-5">
            {item?.image?.map((i) => (
              <img
                key={i.id}
                src={i.url}
                alt=""
                className="h-96 w-96 mx-5 my-5  rounded-md "
              />
            ))}
          </div>

          <h1 className="py-5 text-lg font-semibold">{item.title}</h1>
          <p className="mx-auto max-w-5xl">{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Inverters;
