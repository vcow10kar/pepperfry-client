import React from "react";
import styles from "./filtercard.module.css";

function FilterCard() {
  const handleChange = (e) => {
    console.log(e.target.name);
  };
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.home}>Home</div>
        <div className={styles.applyfilter}>Apply filters</div>
        <div className={styles.brand}>
          <div className={styles.brandname}>Brand</div>
          <img
            className={styles.searchImage}
            src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-1024.png"
            alt="searchicon"
          />
        </div>
        <div className={styles.formDiv}>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="ARRA" onChange={handleChange} />{" "}
            <p>ARRA</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="Mintwud" onChange={handleChange} />{" "}
            <p>Mintwud</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="Home Centre" onChange={handleChange} />{" "}
            <p>Home Centre</p>
          </div>
          <div className={styles.inputdiv}>
            <input
              type="checkbox"
              name="Urban Living"
              onChange={handleChange}
            />{" "}
            <p>Urban Living</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="Furny" onChange={handleChange} />{" "}
            <p>Furny</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="FurniTech" onChange={handleChange} />{" "}
            <p>FurniTech</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="Solace" onChange={handleChange} />{" "}
            <p>Solace</p>
          </div>
          <div className={styles.inputdiv}>
            <input
              type="checkbox"
              name="Urban Living"
              onChange={handleChange}
            />{" "}
            <p>Urban Living</p>
          </div>
          <div className={styles.inputdiv}>
            <input type="checkbox" name="Durina" onChange={handleChange} />{" "}
            <p>Durina</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterCard;
