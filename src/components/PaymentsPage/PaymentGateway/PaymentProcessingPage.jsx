import React from "react";
import styles from "./paymentprocessing.module.css";

function PaymentProcessingPage() {
  return (
    <div>
      <div className={styles.wrapperDiv}>
        <div className={styles.animationDiv}></div>
        <div className={styles.processingDiv}>
          <p className={styles.procesingP}>Processing Your Payment...</p>
        </div>
        <div className={styles.transectionId}>
          <p className={styles.paymentP}>Transaction ID : 307601519</p>
        </div>
        <div className={styles.thankyouDiv}>
          <p className={styles.thankyouPDiv}>
            Taking you back to payment options..
          </p>
        </div>
        <div className={styles.donotClose}>
          <p className={styles.donotCloseP}>DO NOT CLOSE THIS WINDOW</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentProcessingPage;
