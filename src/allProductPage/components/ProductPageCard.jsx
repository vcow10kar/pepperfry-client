import React from "react";
import styles from "./ProductPage.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ProductPageCard() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.imageDiv}>
          <img
            className={styles.image}
            src="https://ii1.pepperfry.com/media/catalog/product/a/n/568x284/antalya-3-seater-sofa-in-blue-colour-by-urban-living-antalya-3-seater-sofa-in-blue-colour-by-urban-l-5yi5ky.jpg"
            alt="sofapic"
          />
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.sofaname}>
            Niki sofa set (3+2+1) in sea green
          </div>
          <div className={styles.brandandwishlistdiv}>
            <div className={styles.brandname}>By Febonics</div>
            <div className={styles.wishlist}>
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.ogprice}>₹ 35,852</div>
            <div className={styles.discountprice}>₹ 4,899</div>
          </div>
          <div className={styles.savingInfo}>
            Save ₹ 13,147 <span style={{ color: "red" }}>(27%)</span>,limited
            time offer
          </div>
        </div>
        <div className={styles.addCartDiv}>
          <button className={styles.cartbutton}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
}

export default ProductPageCard;
