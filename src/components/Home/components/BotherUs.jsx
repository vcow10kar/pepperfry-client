import React from "react";
import styles from "./botherus.module.css";

function BotherUs() {
  const data = [
    {
      id: 1,
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-find-a-studio-img-18082020.jpg",
      banner3: "FIND A STUDIO",
      banne4: " Walk in to your nearest pepperfry studio",
    },
    {
      id: 2,
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-by-on-phone-img-18082020.jpg",
      banner3: "BUY ON PHONE",
      banne4: "Talk To Our Experts for a Free Consultation",
    },
    {
      id: 3,
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/hp-consulting-sol-modular-solutions-img-18082020.jpg",
      banner3: "MODULAR FURNITURE",
      banne4: "Talk To Our Experts for a Free Consultation",
    },
  ];
  return (
    <div>
      <div className={styles.wrapperBotherUs}>
        <div className={styles.containerDiv}>
          <div className={styles.banner1botherus}>
            <p className={styles.headerbotherus}>BOTHER US ALL YOU WANT!</p>
          </div>
          <p className={styles.heade2botherus}>
            You Get a Thrill From Helping People
          </p>
          <div className={styles.allcardbotherus}>
            {data.map((el) => {
              return (
                <div className={styles.indiCardbotherus} key={el.id}>
                  <img
                    className={styles.imagebotheus}
                    src={el.image}
                    alt="pic"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p className={styles.baneer3botherus}>{el.banner3}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <p className={styles.baneer4botherus}>{el.banne4}</p>
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

export default BotherUs;
