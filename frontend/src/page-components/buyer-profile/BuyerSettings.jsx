import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const BuyerSettings = () => {

  const [pass, setPass] = useState({
    oldPass: "",
    confirmOldPass: "",
    newPass: ""
  })
  const [mail, setMail] = useState("")

  let handleData = (e) => {
    setPass({...pass, [e.target.name]: e.target.value})
  }

  return (
    <section className="buyer-pf-cng-pass my-5">
      <div className="container">
        
        <SectionTitle title={"Change"} titleHighlight={"password"} text={"Change your password here"} />

        <div className="col-lg-6 mt-4 pt-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="old-pass">Old password</span>
            <input type="text" className="form-control" name="oldPass" placeholder="old password" value={pass.oldPass} onChange={handleData} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="confirm-old-pass">Confirm password</span>
            <input type="text" className="form-control" name="confirmOldPass" placeholder="confirm old password" value={pass.confirmOldPass} onChange={handleData} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="confirm-old-pass">New password</span>
            <input type="text" className="form-control" name="newPass" placeholder="new password" value={pass.newPass} onChange={handleData} />
          </div>
        </div>

        <button className="mt-4 bg-btns">Change password</button>

        <hr className="my-5" />


        <SectionTitle title={"Forgot"} titleHighlight={"password"} text={"Recover your password here"}/>

        <div className="col-lg-6 mt-4">
          <div className="input-group mb-3">
            <span className="input-group-text" id="mail">email</span>
            <input type="email" className="form-control" name="mail" placeholder="type your email" value={mail} onChange={(e) => setMail(e.target.value)} />
          </div>
        </div>
        <button className="mt-4 bg-btns mb-5">send verification code</button>

      </div>
    </section>
  );
};

export default BuyerSettings;