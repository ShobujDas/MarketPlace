

import '../../assets/loginPage.css'
import slider1 from "../../../public/slider-1.jpg";
import {FiLogIn} from "react-icons/fi";
import {FaHeadphonesSimple, FaRegAddressCard, FaUserCheck} from "react-icons/fa6";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
const UserRegistrationForm = () => {
  return (
    <div className="section">
      <div className="imgDiv">
        <img className="imgSection" src={slider1} alt="User Registration"/>
      </div>
      <div className="container mx-auto">
        <div className="row ">
          <div className="col-md-12">
          <div className="col-md-8 mx-auto">
            <div className="cardStyle card shadow-lg border border-0 p-2">
              <div className="card-body">
                <h2 className="card-title text-center">User Registration</h2>
                <hr/>
                <div className="col-md-12">
                  <form>
                    <div className="mb-3">
                      <div className='d-flex gap-2 '>
                        <div className="mb-3 w-50">
                          <label className="form-label">First Name</label>
                          <input type="text" className="inputField"  placeholder="First Name"/>
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="inputField"  placeholder="Last Name"/>
                        </div>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Email</label>
                        <input type="email" className="inputField"  placeholder="Email"/>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Phone</label>
                        <input type="email" className="inputField"  placeholder="Phone"/>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Password</label>
                        <input type="password" className="inputField"  placeholder="Password"/>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Profile</label>
                        <input type="password" className="inputField"  placeholder="Image Link"/>
                      </div>
                      <div className='d-flex gap-2 justify-content-center'>
                        <div className="mb-3 w-50">
                          <label className="form-label">Country Name</label>
                          <input type="text" className="inputField"  placeholder="Country Name"/>
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">City</label>
                          <input type="text" className="inputField"  placeholder="City"/>
                        </div>
                      </div>
                      <div className='d-flex gap-2 justify-content-center'>
                        <div className="mb-3 w-50">
                          <label className="form-label">Road No.</label>
                          <input type="text" className="inputField"  placeholder="Road No."/>
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">House No.</label>
                          <input type="text" className="inputField"  placeholder="House No."/>
                        </div>
                      </div>
                      <div className='mb-3'>
                        <textarea className="inputField" cols="30" rows="6" aria-label="With textarea"  placeholder='Your Message'
                        ></textarea>
                      </div>
                      <div className="mb-3 mx-auto d-flex gap-2 justify-content-center mt-2 position-relative">
                        <button type="button" className="userRegister" >Register Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
                <div className="col-12 mt-5">
                  <h3>How It <span>Works</span></h3>
                  <p>Most viewed and all-time top-selling services</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-3 mb-5">
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
  );
};
export default UserRegistrationForm;