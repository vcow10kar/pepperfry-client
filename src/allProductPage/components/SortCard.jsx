import React from "react";
import { useState } from "react";
import styles from './sortcard.module.css';

function SortCard({ productData, setSorting }) {
  let updatedData;
  function handleChage(e) {
    if (e.target.value === "lowtohigh") {
      updatedData = [...productData].sort((a, b) => +a.price - +b.price);
      setSorting(updatedData);
    } else if (e.target.value === "hightolow") {
      updatedData = [...productData].sort((a, b) => +b.price - +a.price);
      setSorting(updatedData);
    }
  }
  return (
    <div className= {styles.sortCard}>
      <select
        onChange={handleChage}
        style={{
          width: "140px",
          height: "46px",
          borderRadius: "0px",
          border: "1px solid white",
          backgroundColor: "white",
        }}
      >
        <option className= {styles.options} value="Relevence">Relevence</option>
        <option className= {styles.options} value="lowtohigh">Price Low to High</option>
        <option className= {styles.options} value="hightolow">Price High to Low</option>
        <option className= {styles.options} value="newestfirst">Newest First</option>
        <option className= {styles.options} value="lowtohigh">Fastest Shipping</option>
      </select>
    </div>
  );
}

export default SortCard;
