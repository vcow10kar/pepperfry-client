import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .rec.rec-arrow": {
      color: "#19686B",
      boxShadow: "none",
      fontSize: "8.67px",
      border: "1px solid #E7E7E7",

      /* padding: 0; */
      width: "30px",
      height: "30px",
      minWidth: "24px",
      lineHeight: "24px",
      backgroundColor: "#EEEEEE",
      color: "#4A4A4A"
    },
    "& .rec.rec-arrow:hover": {
      color: "#4A4A4A",
      transitions: "none",
      backgroundColor: "#EEEEEE"
    },
    "& .rec.rec-arrow:focus": {
      color: "#4A4A4A",
      backgroundColor: "#EEEEEE"
    }
  }
});


export default function ProductsImageGallery({data}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();
  const classes = useStyles();

//   const next = () => {
//     if (activeItemIndex + 1 <= data.length - 1) {
//       carouselRef.current.goTo(activeItemIndex + 1);
//       setActiveItemIndex(activeItemIndex + 1);
//     } else if (activeItemIndex + 1 === data.length) {
//       window.location.pathname = "/";
//     }
//   };
  return (
    <div style={{ width: "532px"}}>
      <Carousel
        ref={carouselRef}
        className={classes.root}
        itemsToShow={1}
        showArrows={true}
        pagination={false}
        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
      >
        {data.map((item, i) => (
          <div key={i}>
            <div height="1000px" margin="auto">
              <img src={item} alt="splash" width="100%" />
            </div>
            <p>{item.desc}</p>
          </div>
        ))}
      </Carousel>

      <Carousel
        // ref={carouselRef}
        itemsToShow={3}
        className={classes.root}
        showArrows={true}
        pagination={false}
        //style={{ width: "532px", margin: "auto" }}
      >
        {data.map((item, i) => (
          <div style={{ width: "162px", height: "74px" }}>
            <img
              style={{ width: "162px", height: "74px" }}
              src={item}
              alt = "furniture images"
              key={i}
              active={i === activeItemIndex}
              onMouseEnter={() => carouselRef.current.goTo(i)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
