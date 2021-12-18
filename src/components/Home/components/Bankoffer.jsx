import React from "react";
import styles from "./bankoffer.module.css";

function Bankoffer() {
  const data = [
    {
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_IDFC16421_2x.png",
      id: "1",
    },
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_No_Cost_EMI16421_2x.png",
      id: "2",
    },
    {
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_AMEX16721_2x.png",
      id: "3",
    },
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0122421_2x.png",
      id: "4",
    },
    {
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_Bank_RBL16421_2x.png",
      id: "5",
    },
    {
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/Web_Bank_ICICI_Festive_0222421_2x.png",
      id: "6",
    },
  ];
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.bankoffer}>
          <p>BANK OFFERS</p>
        </div>
        <div className={styles.imageDiv}>
          {data.map((el) => {
            return (
              <div className={styles.individualImage} key={el.id}>
                <img src={el.image} alt="bank" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bankoffer;
