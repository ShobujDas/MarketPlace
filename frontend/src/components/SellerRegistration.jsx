import Accordion from "./Accordion/Accordion.jsx";
import faqs from "../helpers/data.js";
import "../assets/userRegistration.css"

const SellerRegistration = () => {
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
                                <div className='card-body '>
                                    <div className='d-flex gap-2 justify-content-center'>
                                        <div className="mb-3 w-50">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="inputField"  placeholder="First Name"/>
                                        </div>
                                        <div className="mb-3 w-50">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="inputField"  placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="inputField"  placeholder="name@example.com"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="inputField"  placeholder="********"/>
                                    </div>
                                    <div className='mb-3'>
                                        <textarea className="inputField" cols="30" rows="6" aria-label="With textarea"  placeholder='Your Message'></textarea>
                                    </div>

                                    <div className='d-flex gap-2 justify-content-center'>
                                        <span></span>
                                        <div className="mb-3">
                                            <button type="button" className="registerBTN">Register</button>
                                        </div>
                                    </div>
                                    <div className='redirectLogin'>
                                        <div href="#">Already have an account? <span>Log In!</span></div>
                                    </div>
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