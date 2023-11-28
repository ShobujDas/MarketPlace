import Accordion from "./Accordion/Accordion.jsx";
import faqs from "../helpers/data.js";
import "../assets/userRegistration.css"
import {useForm} from "react-hook-form";
import {successToast} from "../helpers/alert.js";
import axios from "axios";
import {Link} from "react-router-dom";

const SellerRegistration = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSignUp=async(data)=>{

        try {
            const res = await axios.post("http://localhost:8080/api/v1/seller-register",data);
            if(res.data.status===1){
                successToast("Account created successfully")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='section'>
                <div className='coverSection my-2 mx-2'>
                    <div className='slideText'>
                        <h1>Contact us</h1>
                        <p>We'd love to talk about how we can help you.</p>
                    </div>
                </div>
                <div className='container mx-auto my-5'>
                    <div className='row'>
                        <div className='col-md-6 col-12 '>
                            <h3 className='text-center mt-2'>Frequently Asked Questions</h3>
                            <Accordion data={faqs}/>
                        </div>
                        <div className='col-md-6 col-12'>
                            <div className='cardSection card border border-0 shadow my-5 p-4'> {/*position-absolute top-50 start-50 translate-end p-4*/}
                                <div className='card-title'>
                                    <h3 className='text-center mt-2 text-danger text-uppercase'>Tell us about yourself</h3>
                                    <p className='text-center'>Whether you have questions or you would just like to say hello, contact us.</p>
                                    <hr />
                                </div>
                                <form onSubmit={handleSubmit(onSignUp)}>
                                    <div className='card-body '>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Service Name</label>
                                                <input type="text" className="inputField"  placeholder="Service Name"
                                                       {...register("serviceName", {
                                                           required: true

                                                       })}
                                                />
                                                {errors.serviceName && <p className='text-danger'>{errors.serviceName.message}</p>}
                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="inputField"  placeholder="Phone Number"
                                                       {...register("phone", {
                                                           required: true
                                                       })}
                                                />
                                                {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="inputField"  placeholder="name@example.com"
                                                   {...register("email", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Profile</label>
                                            <input type="text" className="inputField"  placeholder="Profile Link"
                                                   {...register("img", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.img && <p className='text-danger'>{errors.img.message}</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="inputField"  placeholder="********"
                                                   {...register("password", {
                                                       required: true
                                                   })}
                                            />
                                            {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Road NO.</label>
                                                <input type="text" className="inputField"  placeholder="Road NO."
                                                       {...register("road", {
                                                           required: false
                                                       })}
                                                />

                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">House No</label>
                                                <input type="text" className="inputField"  placeholder="House No"
                                                       {...register("houseNo", {
                                                           required: false
                                                       })}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2 justify-content-center'>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">City Name</label>
                                                <input type="text" className="inputField"  placeholder="City Name"
                                                       {...register("city", {
                                                           required: false
                                                       })}
                                                />

                                            </div>
                                            <div className="mb-3 w-50">
                                                <label className="form-label">Country Name</label>
                                                <input type="text" className="inputField"  placeholder="Country Name"
                                                       {...register("country", {
                                                           required: false
                                                       })}
                                                />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                        <textarea className="inputField" cols="30" rows="6" aria-label="With textarea"  placeholder='Your Message'
                                                  {...register("decs", {
                                                      required: false
                                                  })}
                                        ></textarea>
                                        </div>

                                        <div className='d-flex gap-2 justify-content-center'>
                                            <span></span>
                                            <div className="mb-3">
                                                <button type="submit" className="registerBTN">Register</button>
                                            </div>
                                        </div>
                                        <div className='redirectLogin'>
                                            <Link to="#">Already have an account? <span>Log In!</span></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SellerRegistration;