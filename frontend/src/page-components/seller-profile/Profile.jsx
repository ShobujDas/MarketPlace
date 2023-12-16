import { useEffect, useState } from 'react';
import parse from 'html-react-parser'
import SectionTitle from './../../components/SectionTitle';
import { sellerById } from '../../helpers/api';
import HomeLoader from './../../components/loaders/HomeLoader';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { errorToast } from './../../helpers/alert';

const Profile = ({id}) => {

  let session = JSON.parse(sessionStorage.getItem('user'))
  let cookies = Cookies.get('token')
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      let result = await sellerById(id)
      result && setProfile(result)
    })()
  }, [0])

  // go to messenger
  let goToMessage = (e) => {
    e.preventDefault()
    if(session != null && cookies != null){
      navigate('/message')
    }
    else{
      errorToast('Please login to message')
    }
  }

  return (
    <section className="my-section buyer-profile">
      <div className="container">

        <SectionTitle title={"Provider"} titleHighlight={"Profile"} text={"Information about the seller is found here"} />
        {
          Object.keys(profile).length == 0 && <HomeLoader />
        }

        {
          Object.keys(profile).length > 0 && 
          <div className="row">
              <div className="col-lg-6 rounded-2 overflow-hidden mt-5">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="provider-img">
                      <img src={profile.img} alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 mt-md-0">
                    <div className="provider-info py-4">

                      <h3 className='fw-bold pb-3 border-bottom border-1 border-danger'>{profile['serviceName']}</h3>

                      <h6 className='fw-normal'>
                        <span className='fw-medium'>Address : </span>
                        {`${profile['country']} ${profile?.city ?? ""} ${profile?.road ?? ""} ${profile?.houseNo ?? ""}`}
                      </h6>

                      <h6 className='fw-normal'><span className='fw-medium'>Phone : </span><a href={`tel:+${profile['phone']}`} className="text-decoration-none">{profile['phone']}</a></h6>

                      <h6 className='fw-normal'><span className='fw-medium'>Email : </span><a href={`mailto:${profile['email']}`} className="text-decoration-none">{profile['email']}</a></h6>

                      <button className='btn mt-3' onClick={goToMessage} >message seller</button>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 mt-5">
                <div className="provider-about rounded-2 py-4 px-3 shadow">
                  <h4 className='border-bottom border-1 border-danger mb-4 pb-3'>About</h4>

                  {parse(profile['decs'] ? profile['decs'] : "<p>No details found</p>")}
                </div>
              </div>
          </div>
        }

      </div>
    </section>
  );
};

export default Profile;