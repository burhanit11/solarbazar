"use client";
import styles from "@/styles/styles";
import ProductCard from "@/components/WebLayout/productCard/ProductCard";
import { productData } from "@/static/data";

const Products = () => {
  return (
    <div>
      {productData ? (
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
      ) : null}
    </div>
  );
};

export default Products;
