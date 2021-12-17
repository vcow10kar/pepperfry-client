import React from "react";
import styles from "./latestdesign.module.css";

function LatestDesign() {
  let data = [
    {
      logo: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-woodsworth_2x_15012021.png",
      traits: "Contemporary, Clean, Functional",
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_1.jpg",
      banner2Info:
        "Our Contemporary Wooden Furniture Brand that offers Wide Furniture Choices.",
      popularForData: "Dining Sets, Beds, Study Tables & More",
      id: 1,
    },
    {
      logo: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-casacraft_2x_15012021.png",
      traits: "Trendy, Comfortable, Vibrant",
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_2.jpg",
      banner2Info:
        "Modern Living Room Furniture Brand which brings you Latest Trends from across the Globe.",
      popularForData: "Sofas, Coffee tables, End Tables & More",
      id: 2,
    },
    {
      logo: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mudramark_2x_15012021.png",
      traits: "Ethnic, Indian Carvings, Impeccable Crafting",
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_3.jpg",
      banner2Info:
        "A wide range of Traditional Furniture inspired from our Indian Heritage.",
      popularForData: "Coffee Tables, Cabinets, Dining sets & More",
      id: 3,
    },
    {
      logo: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-mintwud_2x_15012021.png",
      traits: "Modern, Functional, Affordable",
      image:
        "https://ii2.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_4.jpg",
      banner2Info:
        "Designed for Compact Homes. Its Minimalistic, Simple and Functional Furniture at Affordable Price.",
      popularForData: "Wardrobes, Beds, Shoe Racks & More",
      id: 4,
    },
    {
      logo: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-amberville_2x_15012021.png",
      traits: "Gracious Living, Colonial Style, Curved Lines",
      image:
        "https://ii1.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_5.jpg",
      banner2Info:
        "A range of Hand-crafted Colonial Furniture inspired by Mid-Century Designs.",
      popularForData: "Study Tables, Chest of Drawers, Chairs & More",
      id: 5,
    },

    {
      logo: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp-brand-logo-bohemiana_2x_15012021.png",
      traits: "Hand-Crafted, Free-Spirited , Adventurous",
      image:
        "https://ii3.pepperfry.com/media/wysiwyg/banners/Bs_web_23112021_6.jpg",
      banner2Info:
        "Eclectic Furniture inspired by the Spirit of Freedom and Adventure.",
      popularForData: " End Tables, Seating stools, Bar stools & More",
      id: 6,
    },
  ];

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.bannerDiv}>LATEST DESIGNS, LOWEST PRICES.</div>
        <div className={styles.banner1}>
          Choose from our best selling brands
        </div>
        <div className={styles.productCard}>
          {data.map((el) => {
            return (
              <div className={styles.individualCard} key={el.id}>
                <img className={styles.imagediv} src={el.logo} alt="logo" />
                <div className={styles.trait}>
                  <div className={styles.trait1}>Traits:</div>
                  <div className={styles.trait2}>{el.traits}</div>
                </div>
                <div className={styles.price}>
                  <div className={styles.price1}>
                    Price
                    <img src="/icons/rupee.svg" alt="rupeeicon" />
                    <img src="/icons/rupee.svg" alt="rupeeicon" />
                    <img src="/icons/rupee.svg" alt="rupeeicon" />
                    <img src="/icons/rupeeWhite.svg" alt="rupeeicon" />
                    <img src="/icons/rupeeWhite.svg" alt="rupeeicon" />
                  </div>
                </div>
                <img
                  className={styles.productimage}
                  src={el.image}
                  alt="table"
                />
                <div className={styles.banner2}>{el.popularForData}</div>
                <div className={styles.popular}>
                  <div className={styles.popular1}>Popular For</div>
                  <div className={styles.popular2}>
                    Dinings Bed, Study tables & Morez
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default LatestDesign;
