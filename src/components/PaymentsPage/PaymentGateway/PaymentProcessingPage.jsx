import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PaymentAnimation from "./PaymentAnimation";
import styles from "./paymentprocessing.module.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: 'absolute',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  // border: '2px solid #000',
  p: 4,
  outline: 0,
  textAlign: 'center',
  width: 920
};

function PaymentProcessingPage() {
  const {cart, address} = useSelector(state => state.cart);
  const {user} = useSelector(state => state.login);
  const [display, setDisplay] = useState(false);
  
  const handleOpen = () => setDisplay(true);
  const handleClose = () => {
    setDisplay(false);
    history.push('/');
  }
  let history = useHistory();

  const submitOrder = () => {
    console.log('Submitting order...');
    let totalPrice = 0;
    let discountPrice = 0;
    let totalVal = 0;

    for (let i = 0; i < cart.length; i++) {
      const actualPrice = cart[i].product.price * cart[i].quantity;
      totalPrice += actualPrice
      discountPrice += (actualPrice - Math.floor(actualPrice * (cart[i].product.discount_percentage / 100)));
    }
    totalVal = totalPrice - discountPrice + 99;

    const payload = {
      products: [...cart],
      email: user ? user.email : "dummyemail@gmail.com",
      user_id: user ? user._id : "null",
      totalPrice: totalVal,
      address: {
        name: address.name,
        phoneNo: address.phoneNo,
        pincode: address.pincode,
        address: address.address,
        city: address.city,
        state: address.state,
        country: address.country,
      }
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/order`, payload)
    .then(res => {
      console.log('Order Submitted....');
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })

    localStorage.setItem('cart', JSON.stringify([]));
    
    setTimeout(() => {
      setDisplay(true);
      // history.push('/');
    }, 5000);
  }

  useEffect(() => {
    submitOrder();
    
  }, [])
  return (
    <div className= {styles.parentDiv}>
      <div className={styles.wrapperDiv}>
        <div className={styles.animationDiv}>
          <PaymentAnimation/>
        </div>
        <div className={styles.processingDiv}>
          <p className={styles.procesingP}>Processing Your Payment...</p>
        </div>
        <div className={styles.transectionId}>
          <p className={styles.paymentP}>Transaction ID : 307601519</p>
        </div>
        <div className={styles.thankyouDiv}>
          <p className={styles.thankyouPDiv}>
            Taking you back to payment options...
          </p>
        </div>
        <div className={styles.donotClose}>
          <p className={styles.donotCloseP}>DO NOT CLOSE THIS WINDOW</p>
        </div>
      </div>

      <Modal
        open={display}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" sx = {{color: '#F16521', fontWeight: 600 }}component="h2">
            Your Order has been placed!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant = "h5">
            Continue Shopping...
          </Typography>
          <img src = "https://ii2.pepperfry.com/media/wysiwyg/banners/HB01_Web_06122021_1x.jpg" alt = "product"/>
        </Box>
      </Modal>
    </div>
  );
}

export default PaymentProcessingPage;
