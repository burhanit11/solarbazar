import React from "react";
import { sponsoredData } from "@/static/data";
import { Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";

const Sponsored = () => {
  const router = useRouter();

  return (
    // <Paper
    //   sx={{ p: 5, my: 5, cursor: "pointer", borderRadius: 1.8 }}
    //   // className={` hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    // >
    //   <div className="flex justify-between w-full">
    //     {sponsoredData.map((item) => (
    //       <div
    //         key={item.id}
    //         className="flex items-start"
    //         onClick={() => router.push(item.url)}
    //       >
    //         <img
    //           src={item.logo_Url}
    //           style={{ width: "150px", objectFit: "contain" }}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </Paper>
    <Paper
      variant="elevation"
      sx={{ borderRadius: 1.8, my: 5, p: 2, cursor: "pointer" }}
    >
      <Grid container spacing={3}>
        {sponsoredData.map((item, i) => (
          <Grid
            size={{ xs: 4, md: 2 }}
            key={i}
            onClick={() => router.push(item.url)}
            sx={{
              display: "flex",
              // border: "2px solid green",
              // alignItems: "center",
              // justifyContent: "center",
              // placeItems: "center",
              placeContent: "center",
              objectFit: "cover",
            }}
          >
            <div className="items-center m-3 object-cover">
              <img
                src={item.logo_Url}
                className=" w-full h-full items-center object-cover"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Sponsored;
