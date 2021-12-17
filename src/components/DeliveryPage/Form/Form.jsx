import { ButtonsDiv } from "../../Buttons/Buttons"
import styles from "./Form.module.css"
import google from "../../deliveryAddressPage/footerAssets/google.svg"
import facebook from "../../deliveryAddressPage/footerAssets/f.svg";
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/Login/actions";
import { Button } from "@mui/material";

export const Form = ({handleDisplay}) => {
    const [display, setDisplay] = useState(true);
    const { user } = useSelector(state => state.login);

    console.log('Logged in User', user);

    let dispatch = useDispatch();

    const fetchUser = () => {
        axios
            .get("http://localhost:5000/auth/getuser", { withCredentials: true })
            .then(res => {
                dispatch(userLogin());
                localStorage.setItem('userDetails', JSON.stringify(res));
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })

    }

    const handleGoogleOAuth = () => {
        localStorage.setItem('googleLogin', true);

        const googleLoginURL = 'http://localhost:5000/auth';
        const newWindow = window.open(
            googleLoginURL,
            '_self',
            'width = 411'
        );

        fetchUser();
    }

    const [formData, setFormData] = useState({
        name: '',
        phoneNo: "",
        pincode: "",
        address: "",
        city: "",
        state: "",
        country: "India"
    })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = () => {
        console.log("submit");
        console.log(formData);
        handleDisplay();
    }

    useEffect(() => {
        if (user !== null) {
            setDisplay(false);
        }
    })


    return <div className={styles.formCard}>

        <div className={styles.section1}>

            <div className={styles.s1box}>
                <div className={styles.dispalyS1Box1}>
                    <div style={{ marginRight: '69px' }}>Email</div>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} defaultValue={user ? user.email : null} />
                </div>

                {display ?

                    <>
                        <div className={styles.dispalyS1Box2} >or</div>

                        <div className={styles.dispalyS1Box3}>

                            <button className={styles.s1Button} onClick={handleGoogleOAuth}>
                                <img src={google} alt="google" />
                                <div>SIGN IN</div>
                            </button>

                            <button className={styles.s1ButtonF}>
                                <img src={facebook} alt="facebook" />
                                <div>SIGN IN</div>
                            </button>
                        </div>

                    </>
                    : null}

            </div>

            {display ?
                <div className={styles.s2box}>
                    <div className={styles.dispalyS2Box1}>
                        <Checkbox size="large" sx={{ padding: '0px 9px 0px 0px' }} />
                        <div>I want to sign up</div>
                    </div>

                    <div className={styles.dispalyS2Box2}>
                        <div>Sign in for Express checkout,
                            existing offers and more</div>
                    </div>
                </div>

                : null}
        </div>


        <div className={styles.section2}>

            <div className={styles.s2boxes}>
                <div>Name</div>
                <input class="inText" type="text" defaultValue={user ? `${user.displayName.firstName} ${user.displayName.lastName}` : null} name="name" placeholder="Eg:Madhu Venkat" onChange={handleChange} />

            </div>
            <p>enter a valid Name</p>
            <div className={styles.s2boxes}>
                <div>Mobile Number</div>
                <input type="text" name="phoneNo" placeholder="Eg:9999888898" onChange={handleChange} />
            </div>
            <p>enter a valid Number</p>
            <div className={styles.s2boxes}>
                <div>Pincode</div>
                <input type="text" name="pincode" placeholder="Eg:454343" onChange={handleChange} />
            </div>
            <p>enter a valid pincode</p>
            <div className={styles.s2boxes}>
                <div>Address</div>
                <input type="text" name="address" placeholder="House no, building name, society, area, road, landmark" onChange={handleChange} />
            </div>
            <p>enter a valid Address</p>

        </div>



        <div className={styles.section3}>
            <div className={styles.s3boxes}>
                <div >
                    <input type="text" name="city" placeholder=" city" onChange={handleChange} />
                    <p>enter a valid city</p>
                </div>
                <div>
                    <input type="text" name="state" placeholder=" state" onChange={handleChange} />
                    <p>enter a valid state</p>
                </div>

            </div>
            <div className={styles.s3boxes}>
                <input type="text" name="India" value=" India" disabled />
            </div>
            <div className={styles.s3boxes}>
                <Checkbox size="large" sx={{ padding: '0px 9px 0px 0px' }} />
                <div>Billing address is the same as shipping address</div>
            </div>
            <div className={styles.s3boxes}>
                <Checkbox size="large" sx={{ padding: '0px 9px 0px 0px' }} />
                <div>I want to sign up</div>
            </div>
            <div>
                <Button className={styles.button} onClick={handleSubmit} variant = "contained" disableElevation>Save and continue</Button>
            </div>
        </div>
    </div>
}