import { ButtonsDiv } from "../../Buttons/Buttons"
import styles from "./Form.module.css"
import google from "../../deliveryAddressPage/footerAssets/google.svg"
import facebook from "../../deliveryAddressPage/footerAssets/f.svg"
import axios from 'axios';

export const Form = () => {
    const fetchUser = () => {
        axios
        .get("http://localhost:5000/auth/getuser", {withCredentials: true})
        .then(res => {
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

    
    return <div className={styles.formCard}>

        <div className={styles.section1}>

            <div className={styles.s1box}>
                <div className={styles.dispalyS1Box1}>
                    <div style={{ marginRight: '69px' }}>Email</div>
                    <input type="text" name="email" placeholder="Email" />
                </div>

                <div className={styles.dispalyS1Box2} >or</div>

                <div className={styles.dispalyS1Box3}>

                    <button className={styles.s1Button} onClick = {handleGoogleOAuth}>
                        <img src={google} alt="google" />
                        <div>SIGN IN</div>
                    </button>

                    <button className={styles.s1ButtonF}>
                        <img src={facebook} alt="facebook" />
                        <div>SIGN IN</div>
                    </button>
                </div>

            </div>
            <div className={styles.s2box}>
                <div className={styles.dispalyS2Box1}>
                    <input type="checkbox" name="" id="" />
                    <div>I want to sign up</div>
                </div>

                <div className={styles.dispalyS2Box2}>
                    <div>Sign in for Express checkout,
                    existing offers and more</div>
                </div>

            </div>
        </div>


        <div className={styles.section2}>

            <div className={styles.s2boxes}>
                <div>Name</div>
                <input type="text" name="" id="" placeholder="Eg:Madhu Venkat" />
            </div>

            <div className={styles.s2boxes}>
                <div>Mobile Number</div>
                <input type="text" name="" id="" placeholder="Eg:9999888898" />
            </div>

            <div className={styles.s2boxes}>
                <div>Pincode</div>
                <input type="text" name="" id="" placeholder="Eg:454343" />
            </div>

            <div className={styles.s2boxes}>
                <div>Address</div>
                <input type="text" name="" id="" placeholder="House no, building name, society, area, road, landmark" />
            </div>

        </div>



        <div className={styles.section3}>
            <div className={styles.s3boxes}>
                <input type="text" name="city" placeholder=" city" />
                <input type="text" name="state" placeholder=" state" />
            </div>
            <div className={styles.s3boxes}>
                <input type="text" name="India" value=" India" disabled />
            </div>
            <div className={styles.s3boxes}>
                <input type="checkbox" name="" id="" />
                <div>Billing address is the same as shipping address</div>
            </div>
            <div className={styles.s3boxes}>
                <input type="checkbox" name="" id="" />
                <div>I want to sign up</div>
            </div>
            <div>
                <ButtonsDiv>SAVE AND CONTINUE</ButtonsDiv>
            </div>
        </div>
    </div>
}