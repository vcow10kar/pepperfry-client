import styles from "./form.module.css"
import google from "./footerAssets/google.svg"
import facebook from "./footerAssets/f.svg"
import { Checkbox } from '@mui/material';
import {useState} from "react"
export const Form = () => {

    const [formData, setFormData ] = useState({
        name:'',
        phoneNo:"",
        pincode:"",
        address:"",
        city:"",
        state:"",
        country:"India"
    })

    const handleChange = (e) =>{
           const {name,value} = e.target;
        
           setFormData({...formData,[name]:value})

    }

    const handleSubmit = () =>{
        console.log("submit");
        console.log(formData);
    }
    
    return <div className={styles.form}>
        <div>
            <div style={{ marginTop: "36px" }}>
                <div>
                    <label>Email id</label>
                    <input style={{ marginLeft: "15.5%" }} type="email" name="email" placeholder=" Enter your email address"  onChange={handleChange}/>
                    <span style={{ paddingLeft: "2%", paddingRight: "2%" }}>or</span>
                    <span>
                        <button style={{ height: "38px", width: "87px", background: "white", fontSize: "12px",marginRight:"4px" }} >
                            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                                <span><img src={google} alt="google" />
                                </span><span>SIGN IN</span>

                            </div>

                        </button>
                        <button style={{ height: "38px", width: "87px", background: "#0071BC", color: "white", fontSize: "12px", }}>

                            <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
                                <span><img src={facebook} alt="facebook" />
                                </span><span>SIGN IN</span>

                            </div>
                        </button>
                    </span>
                </div>

            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "20.99%", marginTop: "25px", marginBottom: "25px" }}>
                <div style={{ display: "flex", alignItems: "center", marginLeft: "1.5%" }}>
                    {/* <input type="checkbox" /> */}
                    <Checkbox
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}
                    />
                    <div>I HAVE A PASSWORD</div>
                </div>
                <div style={{ height: "32px", width: "178px", marginLeft: "18%" }}>
                    Sign in for Express checkout,existing offers and more
                </div>
            </div>

        </div>


        <div >
            <div>
                <label>Name</label>
                <input style={{ marginLeft: "15.5%" }} type="text" name="name" placeholder=" eg.sanvi" onChange={handleChange} />
            </div>
            <div>
                <label>Mobile number</label>
                <input style={{ marginLeft: "6.8%" }} type="text" name="phoneNo" placeholder=" 91******62" onChange={handleChange}/>
            </div>
            <div>
                <label>Pincode</label>
                <input style={{ marginLeft: "13%" }} type="text" name="pincode" placeholder=" eg.533253" onChange={handleChange}/>
            </div>
            <div>
                <label>Address</label>
                <input style={{ marginLeft: "13%" }} type="text" name="address" placeholder=" House no, building name, society, area, road, landmark" onChange={handleChange}/>
            </div>
            <div>
                <span style={{ marginLeft: "20.97%" }}> <input type="text" id="city" name="city" placeholder=" City" onChange={handleChange}/></span>
                <span> <input type="text" id="state"  name="state" placeholder=" State" onChange={handleChange}/></span>
            </div>
            <div style={{ marginLeft: "20.97%" }}>
                <input type="text" disabled value=" India" />
            </div>

            <div style={{ display: "flex", alignItems: "center", marginLeft: "20.97%" }}>
                {/* <input type="checkbox" /> */}
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}
                />
                <span>Billing address is the same as shipping address</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "20.97%" }}>
                {/* <input type="checkbox" /> */}
                <Checkbox
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 38 } }}
                />
                <span>I want to sign up</span>
            </div>
            <div style={{ marginLeft: "21%" }}>
                <button onClick={handleSubmit}>Save and continue</button>
                {/* <Button>Save and continue</Button> */}
            </div>

        </div>

    </div>
}