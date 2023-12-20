import { FaHeadphonesSimple, FaRegAddressCard, FaUserCheck } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import SectionTitle from "./SectionTitle";

const NeedsSection = ({bg_class}) => {
  return (
    <section className={`needs my-section ${bg_class}`} id="needs">
      <div className="container">

        <SectionTitle title="Need something" titleHighlight="done" text="Any kind of services for your home" />

        <div className="row">

          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <div className="text-content">
              <span className="icon d-block pb-2 fs-2"><FaRegAddressCard /></span>
              <h5>Post a job</h5>
              <p>It&apos;s free and easy to post a job. Simply fill
                in a title, description.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <div className="text-content">
              <span className="icon d-block pb-2 fs-2"><FaUserCheck /></span>
              <h5>Choose Providers</h5>
              <p>Find all kinds of provides needed for your home</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <div className="text-content">
              <span className="icon d-block pb-2 fs-2"><RiMoneyDollarCircleFill /></span>
              <h5>Pay safely</h5>
              <p>Pay any time with no fear with the best security</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-3">
            <div className="text-content">
              <span className="icon d-block pb-2 fs-2"><FaHeadphonesSimple /></span>
              <h5>We&apos;re here to help</h5>
              <p>Any problem for your home or about services, we are here</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NeedsSection;