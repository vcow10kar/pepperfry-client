import React from "react";
import styles from "./tabbar.module.css";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// const style = {
//   position: 'absolute',
//   top: '75%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: 'white',
//   // border: '2px solid #000',
//   p: 4,
//   outline: 0,
//   textAlign: 'center',
//   width: 920,
//   zIndex: 4
// };

function Tabbar() {
  const [nav, setNav] = useState(false);
  // const handleOpen = () => setNav(true);
  // const handleClose = () => {
  //   setNav(false);
  // }

  return (
    <>
    <div className={styles.tabbarParent}>
      <div className={styles.mainDiv}>
        <div className={styles.category}>
          <p
            className={styles.categoryP}
            onClick={() => {
              setNav(!nav);
            }}
          >
            Living
          </p>
        </div>
        <div className={styles.category}>
          <p>Bedroom</p>
        </div>
        <div className={styles.category}>
          <p>Kids Room</p>
        </div>
        <div className={styles.category}>
          <p>Mattresses</p>
        </div>
        <div className={styles.category}>
          <p>Furnishing</p>
        </div>
        <div className={styles.category}>
          <p>Decor</p>
        </div>
        <div className={styles.category}>
          <p>Lightning</p>
        </div>
        <div className={styles.category}>
          <p>Appliances</p>
        </div>
        <div className={styles.category}>
          <p>Modular Furniture</p>
        </div>
        <div className={styles.category}>
          <p> Furniture</p>
        </div>
      </div>
      
    </div >
    {nav ? (
        <div className={styles.subCategory}>
          {/* <Modal
            open={nav}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}> */}
              <div className={styles.uldiv}>
                <p>Sofa</p>
                <ul>
                  <li>1-Seater sofas</li>
                  <li>2-Seater Sofas</li>
                  <li>3-seater Sofas</li>
                  <li>Sofa Sets</li>
                  <li>Sectional Sofas</li>
                  <li>Sofa cum beds</li>
                  <li>Recliners</li>
                  <li>Sofa spa</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                <p>Setting</p>
                <ul>
                  <li>Settees</li>
                  <li>Benches</li>
                  <li>Chaise Loungers</li>
                  <li>Recamiers</li>
                  <li>Ottamans</li>
                  <li>Pouffes</li>
                  <li>Foot Stools</li>
                  <li>Swings</li>
                  <li>Hammocks</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                <p>Chairs</p>
                <ul>
                  <li>Arm Chairs</li>
                  <li>Rocking Chairs</li>
                  <li>Lounge Chairs</li>
                  <li>Cafe Chairs</li>
                  <li>Iconic Chairs</li>
                  <li>Slippers Chairs</li>
                  <li>Barrels Chairs</li>
                  <li>Folding Chairs</li>
                  <li>Plastic Chairs</li>
                  <li>Wings Chairs</li>
                  <li>Office chairs</li>
                  <li>Patio Chairs</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                <p>Tables</p>
                <ul>
                  <li>Coffee Tables</li>
                  <li>Coffee Tables Sets</li>
                  <li>End Tables</li>
                  <li>Nest Tables</li>
                  <li>Console Tables</li>
                  <li>Portable Tables</li>
                  <li>Study Tables</li>
                  <li>Dressing Tables</li>
                  <li>Office Tables</li>
                  <li>Patio Tables</li>
                  <li>Patio sets</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                {" "}
                <p>Tables</p>
                <ul>
                  <li>Coffee Tables</li>
                  <li>Coffee Tables Sets</li>
                  <li>End Tables</li>
                  <li>Nest Tables</li>
                  <li>Console Tables</li>
                  <li>Portable Tables</li>
                  <li>Study Tables</li>
                  <li>Dressing Tables</li>
                  <li>Office Tables</li>
                  <li>Patio Tables</li>
                  <li>Patio sets</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                <p>Cabinatory</p>
                <ul>
                  <li>Shoe racks</li>
                  <li>Entertainment units</li>
                  <li>Cabinet & sideboards</li>
                  <li>Chest of drwaers</li>
                  <li>Book Shelves</li>
                  <li>Book Shelves</li>
                  <li>Book cases</li>
                  <li>Trunks</li>
                  <li>Wardrobes</li>
                  <li>Modular wardrobes</li>
                  <li>Plastics cabinets</li>
                  <li>Office cabinets</li>
                </ul>
              </div>
              <div className={styles.uldiv}>
                <p>Beds</p>
                <ul>
                  <li>Settees</li>
                  <li>Benches</li>
                  <li>Chaise Loungers</li>
                  <li>Recamiers</li>
                  <li>Ottamans</li>
                  <li>Pouffes</li>
                  <li>Foot Stools</li>
                  <li>Swings</li>
                  <li>Hammocks</li>
                </ul>
              </div>
            {/* </Box>
          </Modal> */}
        </div>

      ) : null
      }
    </>
  );
}

export default Tabbar;
