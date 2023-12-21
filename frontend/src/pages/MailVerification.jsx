import { useState } from 'react';
import MasterLayout from './../components/layouts/MasterLayout';
import SectionTitle from './../components/SectionTitle';
import { verifyOtp } from '../helpers/api';

const MailVerification = () => {

  let [otp, setOtp] = useState({otp: ""})

  let verify = async (e) => {
    e.preventDefault()
    let verification = await verifyOtp(parseInt(otp.otp))
    if(verification){
      window.location.replace('/login')
    }
  }



  return (
    <MasterLayout>
      <>
        <section className="my-section verification-page">
          <div className="container">

            <SectionTitle title={"Verify your"} titleHighlight={"email"} text={"Verify your email here"} />

            <div className="col-lg-6 mt-5">
              <h6 className='lead pb-2'>An email with a verification code has been sent to your account</h6>
              <form action="" onSubmit={verify}>
                <input type="text" className='form-control' value={otp.otp} onChange={(e) => setOtp({...otp, ['otp']: e.target.value})} required minLength={6} />

                <button className='bg-btns btn-lg mt-4'>Verify email</button>
              </form>
            </div>


          </div>
        </section>
      </>
    </MasterLayout>
  );
};

export default MailVerification;