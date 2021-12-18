import React from "react";
import styles from "./allproductpage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";
import SortCard from "./components/SortCard";
import FilterCard from "./components/FilterCard";
import ProductPageCard from "./components/ProductPageCard";
import Footer from "../components/footer/Footer";
import Tabbar from "../components/Navbar/Tabbar";
import SearchNavbar from "../components/Navbar/SearchNavbar";
import { useParams } from "react-router-dom";
import { cleanup } from "@testing-library/react";

function AllproductPage() {
  const [productData, setProductData] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [countFilter, setFilterCount] = useState(0);
  console.log("filterBrand", filterBrand);
  // console.log(productData);
  //functiion to filter data
  const filterProductData = function () {
    if (filterBrand.length > 0) {
      let temp = [];
      for (let i = 0; i < filterBrand.length; i++) {
        for (let j = 0; j < productData.length; i++) {
          if (filterBrand[i] === productData[j].brand_id.name) {
            temp.push(productData[j]);
          }
        }
      }
      setFilteredData(temp);

      console.log("temp", temp);
    }
  };

  // useEffect(() => {
  //   filterProductData();
  // }, [countFilter]);

  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let { data } = await axios.get(
      `http://localhost:5000/products/category/${id}`
    );
    console.log(data);
    setProductData(data);
  }

  //sorting

  function setSorting(sortData) {
    setProductData(sortData);
  }

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <SearchNavbar />
      </div>

      <div className={styles.tabbarDiv}>
        <Tabbar />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <SearchResult />
      </div>
      <div className={styles.productMainDiv}>
        <div className={styles.sortingDiv}>
          <div className={styles.productCountDiv}>18 options in sofa set</div>
          <div className={styles.sort}> Sort by:</div>
          <div className={styles.sortCard}>
            <SortCard productData={productData} setSorting={setSorting} />
          </div>
        </div>

        <div className={styles.filterandProductDiv}>
          <div className={styles.FilterCardDiv}>
            <FilterCard
              setFilterBrand={setFilterBrand}
              filterBrand={filterBrand}
              setProductData={setProductData}
              productData={productData}
              setFilterCount={setFilterCount}
              filterProductData={filterProductData}
            />
          </div>
          <div className={styles.productCardDiv}>
            {productData.map((ele) => {
              return <ProductPageCard productData={ele} key={ele._id} />;
            })}
          </div>
        </div>
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
