"use client";
//använder client säger till skriptet att ta den här react filen till javascript bundle.

import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

// Styling för div: className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500"

const ProductCard = () => {
  return (
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
