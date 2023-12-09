
import SectionTitle from './../../components/SectionTitle';

const Profile = ({id}) => {
  return (
    <section className="my-section buyer-profile">
      <div className="container">

        <SectionTitle title={"Provider"} titleHighlight={"Profile"} text={"Information about the seller is found here"} />

        <div className="row mt-5">
          <div className="col-lg-4 col-md-3">
            <div className="provider-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profile;