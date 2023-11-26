import {FaAddressBook, FaMobile} from "react-icons/fa";
import {IoMailSharp, IoPersonSharp} from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";

import '../../assets/loginPage.css'
import {Link} from "react-router-dom";
const UserRegistrationForm = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="cardStyle card shadow-lg border border-0">
              <div className="card-body">
                <h2 className="card-title">User Registration</h2>
                <hr/>
                <form>
                  <div className='col-12 d-flex gap-2'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><IoPersonSharp /></span>
                      <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><IoPersonSharp /></span>
                      <input type="text" className="form-control" placeholder="Second Name" aria-label="Second Name" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><IoMailSharp/></span>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><TbPasswordUser/></span>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                  </div>

                  <div className='col-12 d-flex gap-2'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><FaAddressBook/></span>
                      <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text text-red" id="basic-addon1"><FaMobile/></span>
                      <input type="text" className="form-control" placeholder="Phone" aria-label="phone" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className='col-12 d-flex gap-2'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><FaAddressBook/></span>
                      <input type="text" className="form-control" placeholder="House" aria-label="House" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1"><FaAddressBook/></span>
                      <input type="text" className="form-control" placeholder="Road" aria-label="Road" aria-describedby="basic-addon1"/>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile01"/>
                  </div>
                  <div className="input-group mb-3">
                    <textarea className="form-control" aria-label="With textarea" placeholder='Description'></textarea>
                  </div>
                    <div className="m-4">
                      <span >Already have an account?<Link className="userLogin" to={"/login/user"}> Log In!</Link></span>
                    </div>
                  <div className="input-group mb-3">
                    <div className="col-6 mx-auto">
                      <button className=""></button>
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
export default UserRegistrationForm;