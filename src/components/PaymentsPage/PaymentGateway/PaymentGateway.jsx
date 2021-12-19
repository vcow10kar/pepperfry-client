import React from "react";
import styles from "./paymentgateway.module.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Checkbox from "@mui/material/Checkbox";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
function PaymentGateway() {
  return (
    <div className={styles.wrapperDiv}>
      <div className={styles.maindiv}>
        <div className={styles.leftDiv}>

          <div className={styles.leftDiv1}>
            <Link to="/delivery">
              <div className={styles.leftDiv11}>
                <ArrowBackOutlinedIcon className={styles.lefrarrow} />
                <p className={styles.left11p}>BACK</p>
              </div>
            </Link>

            <img
              src="./icons/paymenticon.svg"
              alt="pepperfrylogo"
              className={styles.leftDiv12img}
            />
          </div>

          <div>
            <div className={styles.leftDiv2}>
              <p className={styles.leftDiv2p}>Enter New Card</p>
            </div>
            <div className={styles.leftDiv3}>
              <p className={styles.leftDiv3p}>
                Total Payable Amount <span>₹ 12,546</span>{" "}
              </p>
            </div>
            <div className={styles.leftDiv4}>
              <p className={styles.leftDiv4p}>Transection ID: 307601519</p>
            </div>
            <div className={styles.leftDiv5}>
              <p>-Convenience of local currency </p>
              <p>-Best rates for this payment</p>
              <p>-Final amount charged</p>
              <br/>
              <hr />
              <p style={{ marginTop: "15px" }}>-Transaction ID :307601519 </p>
            </div>
          </div>


          <div className={styles.leftDiv6}>
            <div className={styles.leftDiv611}>
              Get Flat INR 1500 Cashback only on EMI transaction with American
              Express Credit Cards between 15thOct-30Dec,2021. Valid on minimum
              spend of INR 30000. T&c Apply*
            </div>
          </div>

        </div>


        <div className={styles.rightDiv}>
          <div className={styles.rightDiv1}>
            <p className={styles.rightDiv1p}>CARDS( CREDIT/DEBIT )</p>
          </div>
          <div className={styles.rightDiv2}>
            <div className={styles.formwrapper}>
              <form className={styles.form1}>
                <label>New Card Number</label>
                <input
                  type="number"
                  required
                  placeholder="Enter Card Number (16 characters)"
                  min={1000000000000000}
                  max={9999999999999999}
                  className={styles.formInputdiv}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <div className={styles.cvvandExpiryDiv}>
                    <label>Expiry</label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className={styles.formexpiry}
                    />
                  </div>
                  <div className={styles.cvvandExpiryDiv}>
                    <label>CVV</label>
                    <input
                      type="password"
                      required
                      placeholder="Enter CVV (3)"
                      maxLength={3}
                      className={styles.formexpiry}
                    />
                  </div>
                </div>
                <label>Name On Card</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Name as on Card "
                  className={styles.formInputdiv}
                />
                <div className={styles.checKboxdiv}>
                  <Checkbox color = "secondary" />
                  Save this option securely for fastest payment
                </div>
                <button type = "submit" className={styles.proceedbtn}>PROCEED</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
