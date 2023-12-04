import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import slider from "../../../public/slider-1.jpg"
import { FiLogIn } from "react-icons/fi";
import '../../assets/loginPage.css'
import { buyerLogin, sellerLogin } from "../../helpers/api";
const LoginForm = () => {

    const naviagate = useNavigate()
    let [seller, setSeller] = useState(false)
    const [data, setData] = useState({
        email : "",
        password: ""
    })

    let handleData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    let userTypaHandle = (e) => {
        setSeller(e.target.value)
    }

    let login = async () => {
        let result
        if(!seller){
            result = await buyerLogin(data)
        }
        if(seller){
            result = await sellerLogin(data)
        }
        
        if(result){
            setData({
                email: "",
                password: ""
            })
            setTimeout(() => {
                naviagate('/', { replace: true })
            }, 3000)
        }
    }

    return (
        <section className="login-form my-section" id="login-form">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className="text-center">Log In</h1>
                        <p className="text-center mt-2">Make Your Experience More Better</p>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="card shadow border border-0 rounded my-3">
                            <img className="loginImage" src= {slider} alt="slider" />
                            <div className="card-body p-5">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="inputField" id="email" name="email" value={data.email} placeholder="Email address" onChange={(e) => handleData(e)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pass" className="form-label">Password</label>
                                    <input type="password" className="inputField d-inline" id="pass" name="password" value={data.password} placeholder="Password" onChange={(e) => handleData(e)} />
                                </div>
                                <div className="mb-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="seller" id="seller" value={true} checked={seller == true} onChange={userTypaHandle} />
                                        <label className="form-check-label" >Seller</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="seller" id="buyer" value={false} checked={seller == false} onChange={userTypaHandle} />
                                        <label className="form-check-label" >Buyer</label>
                                    </div>
                                    {seller}
                                    <div className="mb-3 my-2 d-flex justify-content-between" id="forterms">
                                        <span className="keepme"><input className="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"/> Keep me signed in </span>
                                        <p>Don&apos;t have an account? <Link to="/register/user" className="registerNow link-danger cursor-pointer">Register Now!</Link></p>
                                    </div>
                                    <div className="mb-3 mx-auto d-flex gap-2 justify-content-center mt-2 position-relative">
                                        <button type="button" className="loginBtn" onClick={login} >Login Now <span><FiLogIn/></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;