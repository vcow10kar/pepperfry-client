import { ButtonsDiv } from "../../Buttons/Buttons"
import styles from "./Form.module.css"
import google from "../../deliveryAddressPage/footerAssets/google.svg"
import facebook from "../../deliveryAddressPage/footerAssets/f.svg";
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/Login/actions";
import { Button } from "@mui/material";
import { updateAddress } from "../../../Redux/Cart/actions";

export const Form = ({ handleDisplay, handleAddressDisplay }) => {
    const [display, setDisplay] = useState(true);
    const [error, setError] = useState(false);

    const { user } = useSelector(state => state.login);

    console.log('Logged in User', user);

    let dispatch = useDispatch();

    const fetchUser = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/auth/getuser`, { withCredentials: true })
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

        const googleLoginURL = `${process.env.REACT_APP_BACKEND_URL}/auth`;
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

        if (formData.name === "" || formData.phoneNo === "" || formData.pincode === "" && formData.address === ""
            || formData.city === "" || formData.state === "") {
            console.log("error");
            setError(true)
            // $("#name").focus();
        } else {
            console.log('Success...');
            setError(false);
            const payload = {
                name: formData.name,
                phoneNo: formData.phoneNo,
                pincode: formData.pincode,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                country: "India"
            }

            dispatch(updateAddress(payload));
            handleDisplay();
        }

        handleAddressDisplay();

       
    }

    useEffect(() => {
        if (user !== null) {
            setDisplay(false);
        }
    })

    const focusDiv = useRef();
    const focusDiv1 = useRef();
    const focusDiv2 = useRef();

    useEffect(() => {
        focusDiv.current.focus();
        focusDiv1.current.focus();
        focusDiv2.current.focus();
    }, [error]);

    // return (
    //   <div ref={focusDiv}></div>
    // );

    return <div className={styles.formCard}>

        <div className={styles.section1}>

            <div className={styles.s1box}>
                <div className={styles.dispalyS1Box1}>
                    <div style={{ marginRight: '69px' }}>Email</div>
                    <div>
                        <input style={error ? { border: '1px solid red' } : null} ref={focusDiv} type="text" name="email" placeholder="Email" onChange={handleChange} defaultValue={user ? user.email : null} />
                        {error ? <p className={styles.errorHandling} style={{ paddingLeft: "4px", textAlign: "left" }}>Enter a valid email</p> : null}


                    </div>

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
                <input style={error ? { border: '1px solid red' } : null} ref={focusDiv1} class="inText" type="text" defaultValue={user ? `${user.displayName.firstName} ${user.displayName.lastName}` : null} name="name" placeholder="Eg: Madhu Venkat" onChange={handleChange} />

            </div>
            {error ? <p className={styles.errorHandling}>Enter a Valid Name</p> : null}
            <div className={styles.s2boxes}>
                <div>Mobile Number</div>
                <input style={error ? { border: '1px solid red' } : null} ref={focusDiv2} type="text" name="phoneNo" placeholder="Eg: 9999888898" onChange={handleChange} required />
            </div>
            {error ? <p className={styles.errorHandling}>Enter a Valid Number</p> : null}
            <div className={styles.s2boxes}>
                <div>Pincode</div>
                <input style={error ? { border: '1px solid red' } : null} type="text" name="pincode" placeholder="Eg: 454343" onChange={handleChange} />
            </div>
            {error ? <p className={styles.errorHandling}>Enter a Valid Pincode</p> : null}
            <div className={styles.s2boxes}>
                <div>Address</div>
                <input style={error ? { border: '1px solid red' } : null} type="text" name="address" placeholder="House No., Building Name, Society, Area, Road, Landmark" onChange={handleChange} />
            </div>
            {error ? <p className={styles.errorHandling}>Enter a Valid Address</p> : null}


        </div>



        <div className={styles.section3}>
            <div className={styles.s3boxes}>
                <div>
                    <input style={error ? { border: '1px solid red' } : null} type="text" name="city" placeholder=" City" onChange={handleChange} />
                    {error ? <p className={styles.errorHandling} style={{ paddingLeft: "4px", textAlign: "left" }}>Enter a Valid City</p> : null}
                </div>
                <div>
                    <input style={error ? { border: '1px solid red' } : null} type="text" name="state" placeholder=" State" onChange={handleChange} />
                    {error ? <p className={styles.errorHandling} style={{ paddingLeft: "4px", textAlign: "left" }}>Enter a Valid State</p> : null}
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
                <Button onClick={handleSubmit} variant="contained" disableElevation>Save and continue</Button>
            </div>
        </div>
    </div>
}