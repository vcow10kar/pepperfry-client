import React from "react";
import styles from "./stylecheatsheet.module.css";

function StylecheatSheet() {
  let data = [
    {
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/Contemporary_27082019.jpg",
      id: 1,
    },
    {
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/modern_27082019.jpg",
      id: 2,
    },
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/midcentury_27082019.jpg",
      id: 3,
    },
    {
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/industrial_27082019.jpg",
      id: 4,
    },
  ];
  return (
    <div>
      <div className={styles.wrapperDiv}>
        <div className={styles.containerDiv}>
          <div className={styles.namediv}>
            <p>STYLE CHEAT SHEET</p>
          </div>
          <div className={styles.name2Div}>
            <p className={styles.namePtag}>Shop Your Aesthetic</p>
          </div>
          <div className={styles.cardDiv}>
            {data.map((el) => {
              return (
                <div className={styles.indicardDiv} key={el.id}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={el.image} alt="pic" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylecheatSheet;
