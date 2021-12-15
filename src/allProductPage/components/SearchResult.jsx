import React from "react";
import styles from "./searchresult.module.css";

function SearchResult() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.search}> Search results for</div>
        <div className={styles.sofa}>Sofa sets</div>
        <div className={styles.details}>
          <div className={styles.furniture}>Furniture</div>
          <div className={styles.furnishing} style={{ marginLeft: "25px" }}>
            Furnishings
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
