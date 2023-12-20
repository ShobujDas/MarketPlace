import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ReactQuill from 'react-quill';

import { fetchSellerProfile, updateSellerProfile } from '../../helpers/api'
import { quillModule } from "../../helpers/helpers";

const SellerInfo = () => {

  
  const [profile, setProfile] = useState({
    serviceName: "",
    email: "",
    img: "",
    country: "",
    phone: "",
    decs: "",
    short_des: "",
    city: "",
    road: "",
    houseNo: "",
  })

  let handleData = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    (async () => {
      let result = await fetchSellerProfile()
      if (result) {
        setProfile({
          serviceName: result?.serviceName ?? "",
          email: result?.email ?? "",
          img: result?.img ?? "",
          country: result?.country ?? "",
          phone: result?.phone ?? "",
          decs: result?.decs ?? "",
          short_des: result?.short_des ?? "",
          city: result?.city ?? "",
          road: result?.road ?? "",
          houseNo: result?.houseNo ?? "",
        });
      }
    })()
  }, [])
  

  // update info
  let updateInfo = async (e) => {
    e.preventDefault()
    let result = await updateSellerProfile(profile)
  }




  return (
    <section className="seller-info my-5">
      <div className="container">

        <SectionTitle title={"Your"} titleHighlight={"profile"} text={"See your information here"} />

        <div className="col-12 mt-4">
          <form action="" onSubmit={updateInfo}>

            <div className="col-lg-7">
              <div className="input-group mb-3">
                <span className="input-group-text" id="serviceName">Provider</span>
                <input type="text" className="form-control" name="serviceName" placeholder="Provider name" value={profile.serviceName} onChange={handleData} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="email">Email</span>
                <input type="email" className="form-control" name="email" placeholder="email" value={profile.email} disabled />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="phone">Phone</span>
                <input type="text" className="form-control" name="phone" placeholder="phone" value={profile.phone} onChange={handleData} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="country">Country</span>
                <input type="text" className="form-control" name="country" placeholder="country" value={profile.country} onChange={handleData} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="city">City</span>
                <input type="text" className="form-control" name="city" placeholder="city" value={profile.city} onChange={handleData} />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="road">Road</span>
                <input type="text" className="form-control" name="road" placeholder="road" value={profile.road} onChange={handleData} />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="houseNo">House No</span>
                <input type="text" className="form-control" name="houseNo" placeholder="houseNo" value={profile.houseNo} onChange={handleData} />
              </div>
            </div>

            <div className="mt-4">
              <button className="bg-btns btn-lg"> save account </button>
            </div>

          </form>

          {
            profile.decs != "" && 
            <>
              <div className="mb-3">
                <p className="mt-5 fw-medium fs-4 border-bottom border-1 pb-3 border-danger-subtle">Description about profile</p>
                <ReactQuill theme="snow" modules={quillModule()} value={profile.decs} onChange={(e) => setProfile({ ...profile, ['decs']: e })} />
              </div>

              <div className="mt-4">
                <button className="bg-btns btn-lg" onClick={updateInfo}> save description </button>
              </div>
            </>
          }
        </div>


      </div>
    </section>
  );
};

export default SellerInfo;