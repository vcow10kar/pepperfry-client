import React from "react";
import styles from "./donotmiss.module.css";

function DonotMiss() {
  let data = [
    {
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/ca_web_08122021_1.jpg",
      name: "AZELEA",
      subname: "Glam and Grace",
    },
    {
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/ca_web_08122021_2.jpg",
      name: "MERMEA",
      subname: "Thread and Style",
    },
    {
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/ca_web_08122021_3.jpg",
      name: "VERSALIA",
      subname: "Victorian Vibes",
    },
  ];

  return (
    <div className="reveal">
      <div className= {styles.doNotMissParent}>
        <div className={styles.mainDiv}>
          <div className={styles.donotmissBaner1}>HEY, DON’T MISS THESE</div>
          <div className={styles.offerDonotmiss}>Upto 60% Off On New Styles</div>
          <div className={styles.DmissProductDiv}>
            {data.map((el) => {
              return (
                <div className={styles.indiProductCard}>
                  <div className= {styles.imgDiv}>
                  <img className = {styles.imgLink} src={el.image} alt="pic" />
                  </div>
                  <div className={styles.prname}>
                    <h3>{el.name}</h3>
                  </div>
                  <div className={styles.donotmissInfo}>{el.subname}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>


  );
}

export default DonotMiss;
