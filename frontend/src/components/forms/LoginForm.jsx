import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import slider from "../../../public/slider-1.jpg"
import { FiLogIn } from "react-icons/fi";
import '../../assets/loginPage.css'
const LoginForm = () => {

    const isSeller = useParams()
    const [data, setData] = useState({
        email : "",
        password: ""
    })

    return (
        <section className="login-form" id="login-form">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className="text-center mt-5">Log In</h1>
                        <p className="text-center mt-2">Make Your Experience More Better</p>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="card shadow border border-0 rounded my-3">
                            <img className="loginImage" src= {slider} alt="slider" />
                            <div className="card-body p-5">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="inputField" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                                    <input type="password" className="inputField d-inline" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password "/>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" >
                                            Seller
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                        <label className="form-check-label" >
                                            Buyer
                                        </label>
                                    </div>
                                    <div className="mb-3 my-2 d-flex justify-content-between" id="forterms">
                                        <span className="keepme"><input className="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"/> Keep me signed in </span>
                                        <p>Don't have an account? <Link to="/register/user" className="registerNow link-danger cursor-pointer">Register Now!</Link></p>
                                    </div>
                                    <div className="mb-3 mx-auto d-flex gap-2 justify-content-center mt-2 position-relative">
                                        <button type="button" className="loginBtn" >Login Now <span><FiLogIn/></span></button>

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