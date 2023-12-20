import { useState } from 'react';
import '../../assets/loginPage.css'
import slider1 from "/slider-1.jpg";

import {FaHeadphonesSimple, FaRegAddressCard, FaUserCheck} from "react-icons/fa6";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import { buyerRegValidate } from '../../helpers/helpers';
import { userRegistraion } from '../../helpers/api';
import {Link, useNavigate} from 'react-router-dom';

import SectionTitle from "../SectionTitle.jsx";
import NeedsSection from '../NeedsSection.jsx';



const UserRegistrationForm = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    img : "",
    country : "",
    phone : "",
    isSeller : false,
    city : "",
    road : "",
    houseNo : ""
  })

  let handleData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  let createUser = async () => {
    let validate = buyerRegValidate(data)
    if(validate){
      let result = await userRegistraion(data)
      if(result){
        setData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          img: "",
          country: "",
          phone: "",
          isSeller: false,
          city: "",
          road: "",
          houseNo: ""
        })

        setTimeout(() => {
          navigate('/login', {replace: true})
        }, 500)

      }
    }
  }

  return (
    <div className="section">
      <div className="imgDiv">
        <img className="imgSection" src={slider1} alt="User Registration"/>
      </div>
      <div className="container mx-auto">
        <div className="row ">
          <div className="col-md-12 mb-5 pb-5">
          <div className="col-md-8 mx-auto">
            <div className="cardStyle card shadow-lg border border-0 p-2">
              <div className="card-body">
                <h2 className="card-title text-center section-title">User Registration</h2>
                <hr/>
                <div className="col-md-12">
                  <form>
                    <div className="mb-3">
                      <div className='d-flex gap-2 '>
                        <div className="mb-3 w-50">
                          <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name='firstName' placeholder="First Name" value={data.firstName} onChange={handleData} />
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lastName' placeholder="Last Name" value={data.lastName} onChange={handleData} />
                        </div>
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Email</label>
                          <input type="email" className="form-control" name='email' placeholder="Email" value={data.email} onChange={handleData} />
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Phone</label>
                          <input type="email" className="form-control" name='phone' placeholder="Phone" value={data.phone} onChange={handleData} />
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Password</label>
                          <input type="password" className="form-control" name="password" placeholder="Password" value={data.password} onChange={handleData} />
                      </div>
                      <div className="mb-3 ">
                        <label className="form-label">Profile</label>
                          <input type="text" className="form-control" name="img" placeholder="Image Link" value={data.img} onChange={handleData} />
                      </div>
                      <div className='d-flex gap-2 justify-content-center'>
                        <div className="mb-3 w-50">
                          <label className="form-label">Country Name</label>
                            <input type="text" className="form-control" name='country' placeholder="Country Name" value={data.country} onChange={handleData} />
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">City</label>
                            <input type="text" className="form-control" name='city' placeholder="City" value={data.city} onChange={handleData} />
                        </div>
                      </div>
                      <div className='d-flex gap-2 justify-content-center'>
                        <div className="mb-3 w-50">
                          <label className="form-label">Road No.</label>
                            <input type="text" className="form-control" name='road' placeholder="Road No." value={data.road} onChange={handleData} />
                        </div>
                        <div className="mb-3 w-50">
                          <label className="form-label">House No.</label>
                            <input type="text" className="form-control" name='houseNo' placeholder="House No." value={data.houseNo} onChange={handleData} />
                        </div>
                      </div>
                      <div className="mb-3 mx-auto d-flex gap-2 justify-content-center mt-2 position-relative">
                        <button type="button" className="userRegister" onClick={createUser} >Register Now</button>
                      </div>
                      <div className="mb-3 my-2 " id="forterms">
                        <p>Already have an account?<Link to="/login" className="registerNow link-danger cursor-pointer"> Login</Link></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>

      {/* needs section */}
      <NeedsSection bg_class={"bg-body-tertiary"} />
    </div>
  );
};
export default UserRegistrationForm;