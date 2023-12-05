import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

function DashHomePage() {

  const [data, setData] = useState({
    serviceName: "",
    email: "",
    password: "",
    img: "",
    country: "",
    phone: "",
    des: "",
    short_des: "",
    city: "",
    road: "",
    houseNo: "",

  });

  const [photo,setPhoto] = useState()

  let handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  return (
    <DashboardLayout>
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value={data.serviceName} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={data.email} 
                  onChange={(e) => handleData(e)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="enter phone number"
                  value={data.phone} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Country</label>
                <input
                  type="Country"
                  className="form-control"
                  placeholder="Country"
                  value={data.country} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  value={data.city} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Road</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Road Number"
                  value={data.road} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">House No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House Number"
                  value={data.houseNo} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Short Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Write Short Description"
                  value={data.short_des} 
                  onChange={(e) => handleData(e)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Description</label>

                <textarea
                  type="textarea"
                  className="form-control"
                  placeholder="Write Description"
                  value={data.des} 
                  onChange={(e) => handleData(e)}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                type="button"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Change Password</span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="New password"
                value={data.password} 
                onChange={(e) => handleData(e)}
              />
            </div>{" "}
            <br />
            <div className="col-md-12">
              <label className="labels">Confirm Passworde</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm pssword"
                value={data.password} 
                  onChange={(e) => handleData(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
  )
}

export default DashHomePage