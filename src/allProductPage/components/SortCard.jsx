import React from "react";

function SortCard() {
  return (
    <div>
      <select
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
        <option value="lowtohigh">Price high to low</option>
        <option value="newestfirst">Newest First</option>
        <option value="lowtohigh">fastest shipping</option>
      </select>
    </div>
  );
}

export default SortCard;
