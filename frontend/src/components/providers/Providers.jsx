"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <main>{children}</main>
      </Provider>
    </>
  );
};

export default Providers;
