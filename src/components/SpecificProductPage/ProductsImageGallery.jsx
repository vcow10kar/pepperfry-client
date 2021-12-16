import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .rec.rec-arrow": {
      boxShadow: "none",
      fontSize: "10px",
      border: "1px solid #E7E7E7",
      width: "24px",
      height: "24px",
      minWidth: "24px",
      lineHeight: "24px",
      backgroundColor: "white",
      color: "#4A4A4A"
    },
    "& .rec.rec-arrow:hover": {
      color: "#4A4A4A",
      backgroundColor: "#EEEEEE"
    },
    "& .rec.rec-arrow:focus": {
      color: "#4A4A4A",
      backgroundColor: "#EEEEEE"
    }
  },

  itemHover: {
    '& :hover': {
      border: '2px'
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
    <div style={{ minWidth: "532px"}}>
      <Carousel
        ref={carouselRef}
        className={classes.root}
        itemsToShow={1}
        showArrows={true}
        pagination={false}
        style = {{marginBottom: '13px'}}
        transitionMs={400}
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
          <div style={{ width: "162px", height: "74px" }} className={classes.itemHover}>
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
