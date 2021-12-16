import React from "react";
import styles from "./allproductpage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";
import SortCard from "./components/SortCard";
import FilterCard from "./components/FilterCard";
import ProductPageCard from "./components/ProductPageCard";
import Footer from "../components/footer/Footer";

function AllproductPage() {
  const [productData, setProductData] = useState([]);
  // console.log(productData);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data } = await axios.get(`http://localhost:5000/products`);
    setProductData(data);
  }

  //sorting

  function setSorting(sortData) {
    // setProductData(sortData);
  }

  return (
    <>
      <div>
        <SearchResult />
      </div>
      <div className={styles.productMainDiv}>
        <div className={styles.sortingDiv}>
          <div className={styles.productCountDiv}>18 options in sofa set</div>
          <div className={styles.sort}> Sort by:</div>
          <div className={styles.sortCard}>
            <SortCard productData={productData} setSorting={setSorting()} />
          </div>
        </div>
        <div className={styles.filterandProductDiv}>
          <div className={styles.FilterCardDiv}>
            <FilterCard />
          </div>
          <div className={styles.productCardDiv}>
            {productData.map((ele) => {
              return <ProductPageCard productData={ele} key={ele._id} />;
            })}
            ;
          </div>
        </div>
        <div>
          <button className={styles.paginationButton}>SHOW MORE OPTIONS</button>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <Footer />
      </div>
    </>
  );
}

export default AllproductPage;
