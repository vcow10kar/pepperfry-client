import React from "react";
import styles from "./SearchNavbar.module.css";
import axios from "axios";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function SearchNavbar() {
  const [search, setSearch] = useState([]);

  async function handleChange(event) {
    const { value } = event.target;
    let { data } = await axios.get(
      `https://demo.dataverse.org/api/search?q=${value}`
    );
    setSearch(data.data.items);
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <img
          className={styles.companyLogo}
          src="https://ii1.pepperfry.com/images/svg/pf_logo_nov_2017.svg"
          alt="pepperfry logo"
        />
        <div></div>
        <div className={styles.searchDiv}>
          <input
            className={styles.searchBox}
            type="text"
            placeholder="Search"
            name="search"
            onChange={handleChange}
          />
          <SearchOutlinedIcon className={styles.searchIcon} />
        </div>

        <div className={styles.icondiv}>
          <div className={styles.iconOne}>
            <LocalShippingOutlinedIcon className={styles.icon} />
            Track
          </div>
          <div className={styles.iconOne}>
            <FavoriteBorderOutlinedIcon className={styles.icon} />
            Wishlist
          </div>
          <div className={styles.iconOne}>
            <ShoppingCartOutlinedIcon className={styles.icon} />
            Cart
          </div>
          <div className={styles.iconOne}>
            <PermIdentityOutlinedIcon className={styles.icon} />
            Profile
          </div>
        </div>
      </div>
      {search?.length > 0 && (
        <div className={styles.autocomplete}>
          {search?.map((el, i) => {
            return (
              <div key={i} className={styles.autocompleteItems}>
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchNavbar;
