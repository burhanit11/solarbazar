import styles from "@/styles/styles";
// import ProductCard from "../ProductCard/ProductCard";

const FeaturedProduct = () => {
  // const { allProducts } = useSelector((state) => state.products);

  return (
    <div className={`${styles.section} my-10 `}>
      <h1 className={` text-start font-bold text-xl`}>Featured Products</h1>

      {/* <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allProducts && allProducts.length !== 0 && (
            <>
              {allProducts &&
                allProducts.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
            </>
          )}
        </div> */}
    </div>
  );
};

export default FeaturedProduct;
