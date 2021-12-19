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
import { Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

function AllproductPage() {
  const [allData, setAllData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filterBrand, setFilterBrand] = useState({ values: [], count: 0 });
  const [filteredData, setFilteredData] = useState([]);
  const [countFilter, setFilterCount] = useState(0);
  const [page, setPage] = useState(1);

  // const filterProductData = function () {
  //   if (filterBrand.values.length > 0) {
  //     let temp = [];
  //     for (let i = 0; i < filterBrand.values.length; i++) {
  //       for (let j = 0; j < productData.length; i++) {
  //         if (filterBrand.values[i] === productData[j].brand_id.name) {
  //           temp.push(productData[j]);
  //         }
  //       }
  //     }
  //     // setFilteredData(temp);
  //   }
  // };

  const { id } = useParams();
  useEffect(() => {
    getData(page);
  }, [page]);

  async function getData() {
    let { data } = await axios.get(
      `http://localhost:5000/products/category/${id}?page=${page}`
    );
    setProductData(prev => [...prev, ...data]);
    setAllData(prev => [...prev, ...data]);
  }

  //sorting

  function setSorting(sortData) {
    setProductData(sortData);
  }

  const handleShowMore = () => {
    let temp = page;
    console.log(temp);
    setPage(prev => prev + 1);
    // getData(page);
  }

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Navbar />
      </div>

      {/* <div className={styles.tabbarDiv}>
        <Tabbar />
      </div> */}

      <div className={styles.productMainDiv}>
        <div style={{ backgroundColor: "white" }}>
          <SearchResult />
        </div>
        <div className={styles.sortingDiv}>
          <div className={styles.productCountDiv}>{productData.length} options</div>
          <div style={{ display: 'flex', marginTop: 'auto' }}>
            <div className={styles.sort}> Sort by:</div>
            <div className={styles.sortCard}>
              <SortCard productData={productData} setSorting={setSorting} />
            </div>
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
              // filterProductData={filterProductData}
              allData={allData}
            />
          </div>
          <div>
            <div className={styles.productCardDiv}>
              {productData.map((ele, i) => {
                return <ProductPageCard productData={ele} key={ele._id} key={`productkey${i}`} />;
              })}
            </div>
            <div
              style={{
                width: '830px',
                margin: '24px auto',
              }}
            >
              <Button onClick={handleShowMore} variant="contained" disableElevation className={styles.paginationButton}>SHOW MORE OPTIONS</Button>
            </div>
          </div>

        </div>

      </div>
      <div className={styles.footerDiv}>
        <Footer />
      </div>
    </>
  );
}

export default AllproductPage;
