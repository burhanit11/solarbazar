import React from "react";
import styles from "@/styles/styles";
import { brandingData, categoriesData } from "@/static/data";
import { useRouter } from "next/navigation";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const data = [
  {
    title: "Solar Panel",
    url: "solar-panel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfZMxOpBuGKmzU8OHCAk6EQ37ISCsIHvyTQ&s",
  },
  {
    title: "Inverter",
    url: "inverters",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/7/327747133/BQ/UT/PH/11950380/deye-inverter-250x250.jpg",
  },
  {
    title: "Call's",
    url: "calls",
    img: "data:image/jpeg;base64,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",
  },
  {
    title: "Batters",
    url: "batters",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctyU36uJW10fvTSnleIk0LXISHkx2kRI0ZNUCtYGYcJqirsBKffaOIihHucTN1NkvZuE&usqp=CAU",
  },
];

const Categories = () => {
  const router = useRouter();
  return (
    <>
      <div className={`${styles.section} hidden sm:block `}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.slice(0, 4).map((i) => {
              const handleSubmit = (i) => {
                router.push(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
        </div>
      </div> */}
      {/* <div
        className={`${styles.section} bg-white gird grid-cols-3 p-6 rounded-lg mb-12`}
      > */}

      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 3 }}>
        {data.slice(0, 4).map((item, i) => (
          <Grid
            size={{ xs: 12, md: 6 }}
            key={i}
            onClick={() => router.push(item.url)}
            // sx={{ borderRadius: 3, bgcolor: "white" }}
          >
            <Paper
              variant="elevation"
              sx={{ borderRadius: 1.8, p: 1, cursor: "pointer" }}
            >
              <div className="flex">
                <img
                  src={item.img}
                  className="w-[50%] h-[50%] items-center object-cover"
                />
                <img
                  src={item.img}
                  className="w-[50%] h-[50%] items-center object-cover"
                />
              </div>
            </Paper>
            <h5
              className={`text-[18px] text-center leading-[1.3] text-blue-600 py-3`}
            >
              {item.title}
            </h5>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
