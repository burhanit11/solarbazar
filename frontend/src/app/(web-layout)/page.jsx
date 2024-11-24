"use client";
import BestDeals from "@/components/WebLayout/bestDeals/BestDeals";
import Categories from "@/components/WebLayout/categories/Categories";
import FeaturedProduct from "@/components/WebLayout/featuredProduct/FeaturedProduct";
import Hero from "@/components/WebLayout/hero/Hero";
import Sponsored from "@/components/WebLayout/Sponsored";
import { Container } from "@mui/material";

const WebLayout = () => {
  return (
    <>
      <Hero />
      <Container>
        <Categories />
        <BestDeals />
        <FeaturedProduct />
        <Sponsored />
      </Container>
    </>
  );
};

export default WebLayout;
