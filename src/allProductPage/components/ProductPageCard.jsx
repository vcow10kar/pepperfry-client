import React from "react";
import styles from "./ProductPageCard.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function ProductPageCard({ productData }) {
  const { name, imagesArray, _id, price, brand_id } = productData;
  let discountPrice = Math.floor(price * (27 / 100));
  let saving = price - discountPrice;

  return (
    <>
      <div className={styles.mainDiv} key={_id}>
        <div className={styles.imageDiv}>
          <img className={styles.image} src={imagesArray[0]} alt="sofapic" />
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.sofaname}>{name}</div>
          <div className={styles.brandandwishlistdiv}>
            <div className={styles.brandname}>{`By: ${brand_id.name}`}</div>
            <div className={styles.wishlist}>
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.ogprice}>₹ {discountPrice}</div>
            <div className={styles.discountprice}>{`₹ ${price}`} </div>
          </div>
          <div className={styles.savingInfo}>
            {`Save ₹ ${saving}`} <span style={{ color: "red" }}>(27%)</span>
            ,limited time offer
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
