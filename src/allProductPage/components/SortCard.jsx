import React from "react";
import { useState } from "react";

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
    <div>
      <select
        onChange={handleChage}
        style={{
          width: "105px",
          height: "36px",
          borderRadius: "0px",
          border: "1px solid white",
          backgroundColor: "white",
        }}
      >
        <option value="Relevence">Relevence</option>
        <option value="lowtohigh">Price low to high</option>
        <option value="hightolow">Price high to low</option>
        <option value="newestfirst">Newest First</option>
        <option value="lowtohigh">fastest shipping</option>
      </select>
    </div>
  );
}

export default SortCard;
