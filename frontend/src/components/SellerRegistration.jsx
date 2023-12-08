import Accordion from "./Accordion/Accordion.jsx";
import faqs from "../helpers/data.js";
import "../assets/SellerBuyer.css"
import {useForm} from "react-hook-form";

import {Link} from "react-router-dom";
import {FaHeadphonesSimple, FaRegAddressCard, FaUserCheck} from "react-icons/fa6";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {sellerRegistraion} from "../helpers/api.js";

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
                                    <h3 className='text-center mt-2 text-danger text-uppercase'>Tell us about yourself</h3>
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
                <div className="howitWorks mb-5" id="needs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>How It <span>Works</span></h3>
                                <p>Most viewed and all-time top-selling services</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                <div className="text-content">
                                    <p className="icon fs-1"><FaRegAddressCard /></p>
                                    <h5>Post a job</h5>
                                    <p>It&apos;s free and easy to post a job. Simply fill
                                        in a title, description.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                <div className="text-content">
                                    <p className="icon fs-1"><FaUserCheck /></p>
                                    <h5>Choose Providers</h5>
                                    <p>Find all kinds of provides needed for your home</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                <div className="text-content">
                                    <p className="icon fs-1"><RiMoneyDollarCircleFill /></p>
                                    <h5>Pay safely</h5>
                                    <p>Pay any time with no fear with the best security</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                <div className="text-content">
                                    <p className="icon fs-1"><FaHeadphonesSimple /></p>
                                    <h5>We&apos;re here to help</h5>
                                    <p>Any problem for your home or about services, we are here</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerRegistration;