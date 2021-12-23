import React from "react";
import styles from "./SearchNavbar.module.css";
import axios from "axios";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link, useHistory } from "react-router-dom";

function SearchNavbar() {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    handleChange();
  }

  async function handleChange() {

    if (inputText.length > 2) {
      let { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category/search?search=${inputText}`);
      setSearch(data);
    }


  }

  let history = useHistory();

  const handleNavigation = (id) => {
    setSearch([]);
    setInputText("");
    history.push(`/allProducts/${id}`);
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <Link to='/'>
          <img
            className={styles.companyLogo}
            src="https://ii1.pepperfry.com/images/svg/pf_logo_nov_2017.svg"
            alt="pepperfry logo"
          />
        </Link>
        <div className={styles.searchDivParent}>
          <div className={styles.searchDiv}>
            <input
              className={styles.searchBox}
              type="text"
              placeholder="Search"
              name="search"
              onChange={handleInputChange}
            />
            <SearchOutlinedIcon className={styles.searchIcon} />
          </div>
          {search.length > 0 && inputText.length > 3 ? (
            <div className={styles.autocomplete}>
              {search?.map((el, i) => {
                return (
                  <div
                    key={i}
                    className={styles.autocompleteItems}
                    onClick={() => handleNavigation(el._id)}
                  >
                    <p>{el.name}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>


        <div className={styles.icondiv}>
          <div className={styles.iconOne}>
            <LocalShippingOutlinedIcon className={styles.icon} />
            <p>Track</p>
          </div>
          <div className={styles.iconOne}>
            <FavoriteBorderOutlinedIcon className={styles.icon} />
            <p>Wishlist</p>
          </div>
          <div className={styles.iconOne}>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className={styles.icon} />
              <p>Cart</p>
            </Link>
          </div>
          <div className={styles.iconOne}>
            <PermIdentityOutlinedIcon className={styles.icon} />
            <p>Profile</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default SearchNavbar;
