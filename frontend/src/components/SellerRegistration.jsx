import Accordion from "./Accordion/Accordion.jsx";
import faqs from "../helpers/data.js";
import "../assets/SellerBuyer.css"

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import {Link} from "react-router-dom";
import {sellerRegistraion} from "../helpers/api.js";
import NeedsSection from "./NeedsSection.jsx";
import { useState } from "react";
import SectionTitle from './SectionTitle';

const SellerRegistration = () => {

    const [sellerData, setSellerData] = useState({
        serviceName: "",
        email: "",
        password: "",
        img: "",
        phone: "",
        country: "",
        city: "",
        road: "",
        houseNo: "",
        short_des: "",
        isSeller: true,
    })

    console.log(sellerData)
    // handle data
    let handleData = (e) => {
        setSellerData({...sellerData, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <div className='sectionbody'>
                <div className='coverSection my-2 mx-2'>
                    <div className='col-12 slideText'>
                        <h1>Contact us</h1>
                        <p>We&apos;d love to talk about how we can help you.</p>
                    </div>
                </div>
                <div className='container mx-auto my-5 w-100'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='cardSection card border border-0 shadow my-5 ml-5 p-4'> {/*position-absolute top-50 start-50 translate-end p-4*/}
                                <SectionTitle title={"Provider"} titleHighlight={"registration"} text={"Become a service provider here at TrustHome"} />

                                
                                <div className="mt-4">
                                    <form action="">
                                        
                                        <label htmlFor="serviceName" className="fw-medium">Provider name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="serviceName" value={sellerData.serviceName} placeholder="Name of service provider" onChange={handleData} />

                                        <label htmlFor="email" className="fw-medium">Provider email<span className="text-danger">*</span></label>
                                        <input type="email" className="form-control mt-2 mb-4" name="email" id="email" value={sellerData.email} placeholder="provider email" onChange={handleData} />

                                        <label htmlFor="password" className="fw-medium">Password<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="password" id="password" value={sellerData.password} placeholder="password" onChange={handleData} />

                                        <label htmlFor="img" className="fw-medium">Profile Image<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="img" id="img" value={sellerData.img} placeholder="profile image" onChange={handleData} />

                                        <label htmlFor="phone" className="fw-medium mb-2">Phone<span className="text-danger">*</span></label>
                                        <PhoneInput
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                                className: "form-control w-100 form-control-lg"
                                            }}
                                            enableSearch={true}
                                            autoFormat={false}
                                            value={sellerData.phone}
                                            onChange={(phone) => setSellerData({ ...sellerData, "phone": phone })}
                                        />

                                        <label htmlFor="country" className="fw-medium mt-4">Country<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="country" id="country" value={sellerData.country} placeholder="Country" onChange={handleData} />

                                        <label htmlFor="city" className="fw-medium">City<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="city" id="city" value={sellerData.city} placeholder="city" onChange={handleData} />

                                        <label htmlFor="road" className="fw-medium">Road<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="road" id="road" value={sellerData.road} placeholder="road" onChange={handleData} />

                                        <label htmlFor="houseNo" className="fw-medium">House No<span className="text-danger">*</span></label>
                                        <input type="text" className="form-control mt-2 mb-4" name="houseNo" value={sellerData.houseNo} id="houseNo" placeholder="Country" onChange={handleData} />

                                        <label htmlFor="short_des" className="fw-medium">Short description<span className="text-danger">*</span></label>
                                        <textarea type="text" className="form-control mt-2 mb-4" name="short_des" value={sellerData.short_des} id="short_des" placeholder="short description about your company" onChange={handleData} />

                                        <button className="bg-btns btn-lg">create account</button>

                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="faq-box">
                                <h3 className='text-center mt-2'>Frequently Asked Questions</h3>
                                <Accordion data={faqs} />
                            </div>
                        </div>

                    </div>
                </div>
                
                {/* needs section */}
                <NeedsSection bg_class={"bg-body-tertiary"} />

            </div>
        </div>
    );
};

export default SellerRegistration;