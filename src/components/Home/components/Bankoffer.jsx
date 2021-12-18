import React from "react";
import styles from "./bankoffer.module.css";

function Bankoffer() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.bankoffer}>
          <p>BANK OFFERS</p>
        </div>
        <div className={styles.imageDiv}>
          <div className={styles.individualImage}>
            <img
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_IDFC16421_2x.png"
              alt="bank"
            />
          </div>
          <div className={styles.individualImage}>
            <img
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_No_Cost_EMI16421_2x.png"
              alt="bank"
            />
          </div>
          <div className={styles.individualImage}>
            <img
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_AMEX16721_2x.png"
              alt="bank"
            />
          </div>
          <div className={styles.individualImage}>
            <img
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0122421_2x.png"
              alt="bank"
            />
          </div>
          <div className={styles.individualImage}>
            <img
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_RBL16421_2x.png"
              alt="bank"
            />
          </div>
          <div className={styles.individualImage}>
            <img
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0222421_2x.png"
              alt="bank"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bankoffer;
