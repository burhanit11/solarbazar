"use client";
import Footer from "@/components/WebLayout/footer/Footer";
import Header from "@/components/WebLayout/Header/Header";

export default function WebLayout({ children }) {
  return (
    <div className="bg-bgColor ">
      <Header activeHeading={1} />
      {children}
      <Footer />
    </div>
  );
}
