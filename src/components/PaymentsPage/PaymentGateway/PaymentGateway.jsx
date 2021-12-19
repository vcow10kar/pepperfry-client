import React from "react";
import styles from "./paymentgateway.module.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Checkbox from "@mui/material/Checkbox";
function PaymentGateway() {
  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.leftDiv}>
          <div className={styles.leftDiv1}>
            <div className={styles.leftDiv11}>
              <ArrowBackOutlinedIcon className={styles.lefrarrow} />
              <p className={styles.left11p}>BACK</p>
            </div>
            <img
              src="./icons/paymenticon.svg"
              alt="pepperfrylogo"
              className={styles.leftDiv12img}
            />
          </div>
          <div className={styles.leftDiv2}>
            <p className={styles.leftDiv2p}>Enter New Card</p>
          </div>
          <div className={styles.leftDiv3}>
            <p className={styles.leftDiv3p}>
              Total Payable Amount <span>₹ 12,546</span>{" "}
            </p>
          </div>
          <div className={styles.leftDiv4}>
            <p className={styles.leftDiv4p}>Transection ID:307601519</p>
          </div>
          <div className={styles.leftDiv5}>
            <p>-Convenience of local currency </p>
            <p>-Best rates for this payment</p>
            <p>-Final amount charged</p>
            <p>-Transaction ID :307601519 </p>
            <hr />
            <p style={{ marginTop: "15px" }}>-Transaction ID :307601519 </p>
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
                  type="text"
                  placeholder="Enter Card number"
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
                    <label>Exipry</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className={styles.formexpiry}
                    />
                  </div>
                  <div className={styles.cvvandExpiryDiv}>
                    <label>CVV</label>
                    <input
                      type="text"
                      placeholder="Enter CVV"
                      className={styles.formexpiry}
                    />
                  </div>
                </div>
                <label>Name On Card</label>
                <input
                  type="text"
                  placeholder="Enter name as on Card "
                  className={styles.formInputdiv}
                />
                <div className={styles.checKboxdiv}>
                  <Checkbox />
                  Save this option securely for fastest payment
                </div>
                <div className={styles.proceedbtn}>PROCEED</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentGateway;
