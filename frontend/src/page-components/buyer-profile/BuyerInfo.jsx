import { useEffect, useState } from "react";
import { updateBuyerProfile, userProfile } from "../../helpers/api";
import SectionTitle from './../../components/SectionTitle';

const BuyerInfo = () => {

  const [profile, setProfile] = useState({
    firstName : "",
    lastName : "",
    email : "",
    img : "",
    country : "",
    phone : "",
    city : "",
    road : "",
    houseNo : "",
  })

  let handleData = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    (async () => {
      let result = await userProfile()
      if(result){
        setProfile({
          firstName: result?.firstName ?? "",
          lastName: result?.lastName ?? "",
          email: result?.email ?? "",
          img: result?.img ?? "",
          country: result?.country ?? "",
          phone: result?.phone ?? "",
          city: result?.city ?? "",
          road: result?.road ?? "",
          houseNo: result?.houseNo ?? "",
        })
      }
    })()
  }, [0])


  // buyer profile update
  let updateProfile = async (e) => {
    e.preventDefault();
    await updateBuyerProfile(profile)
  }


  return (
    <section className="my-5 buyer-profile-section">
      <div className="container">

        <SectionTitle title={"Your"} titleHighlight={"profile"} text={"See your profile info here"} />
        
        <div className="buyer-profile-img">
          <img src={profile.img} alt="" />
        </div>

        <div className="mt-3">
          <form action="" onSubmit={updateProfile}>
            <div className="row">
              <div className="col-lg-6">

                <div className="input-group mb-3">
                  <span className="input-group-text" id="first-name">First name</span>
                  <input type="text" className="form-control" name="firstName" placeholder="First Name" value={profile.firstName} onChange={handleData} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="last-name">Last name</span>
                  <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={profile.lastName} onChange={handleData} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="email">Email</span>
                  <input type="email" className="form-control" name="email" placeholder="EMail" value={profile.email} disabled />
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

                <button type="submit" className="bg-btns btn-lg mt-4">save account</button>                

              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default BuyerInfo;