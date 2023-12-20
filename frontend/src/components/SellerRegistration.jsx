import Accordion from "./Accordion/Accordion.jsx";
import faqs from "../helpers/data.js";
import "../assets/SellerBuyer.css"
import {useForm} from "react-hook-form";

import {Link} from "react-router-dom";
import {FaHeadphonesSimple, FaRegAddressCard, FaUserCheck} from "react-icons/fa6";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {sellerRegistraion} from "../helpers/api.js";
import NeedsSection from "./NeedsSection.jsx";

const SellerRegistration = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSignUp=async(data)=>{
        try {
            await sellerRegistraion(data);

        } catch (error) {
            console.log(error)
        }
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
                                <div className='card-title'>
                                    <h3 className='text-center mt-2 text-uppercase '>Tell us about yourself</h3>
                                    <p className='text-center'>Whether you have questions or you would just like to say hello, contact us.</p>
                                    <hr />
                                </div>
                                <form onSubmit={handleSubmit(onSignUp)}>
                                    <div className='card-body'>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Service Name</label>
                                                <input type="text" className="form-control"  placeholder="Service Name"
                                                       {...register("serviceName", {
                                                           required: true

                                                       })}
                                                />
                                                {errors.serviceName && <p className='text-danger'>{errors.serviceName.message}</p>}
                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="form-control"  placeholder="Phone Number"
                                                       {...register("phone", {
                                                           required: true
                                                       })}
                                                />
                                                {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control"  placeholder="name@example.com"
                                                   {...register("email", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Profile</label>
                                            <input type="text" className="form-control"  placeholder="Profile Link"
                                                   {...register("img", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.img && <p className='text-danger'>{errors.img.message}</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control"  placeholder="********"
                                                   {...register("password", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Road NO.</label>
                                                <input type="text" className="form-control"  placeholder="Road NO."
                                                       {...register("road", {
                                                           required: false
                                                       })}
                                                />

                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">House No</label>
                                                <input type="text" className="form-control"  placeholder="House No"
                                                       {...register("houseNo", {
                                                           required: false
                                                       })}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">City Name</label>
                                                <input type="text" className="form-control"  placeholder="City Name"
                                                       {...register("city", {
                                                           required: false
                                                       })}
                                                />

                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Country Name</label>
                                                <input type="text" className="form-control"  placeholder="Country Name"
                                                       {...register("country", {
                                                           required: false
                                                       })}
                                                />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                        <textarea className="form-control" cols="30" rows="6" aria-label="With textarea"  placeholder='Your Message'
                                                  {...register("decs", {
                                                      required: false
                                                  })}
                                        ></textarea>
                                        </div>

                                        <div className='d-flex gap-2 justify-content-center'>
                                            <span></span>
                                            <div className="mb-3">
                                                <button type="submit" className="userRegister">Register</button>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <span>Already have an account? <Link className="redirectLogin" to="/login">Log In!</Link></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='text-center mt-2'>Frequently Asked Questions</h3>
                            <Accordion data={faqs}/>
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