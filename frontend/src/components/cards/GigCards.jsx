import { TbCoinTaka } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const GigCards = ({data}) => {
  console.log(data)
  return (
    <div className="col-lg-4 col-md-6 col-sm-2 mt-3">
      <div className="gig-box">

        <div className="gig-cover">
          <img src={data['cover']} alt="" />
        </div>

        <div className="text-content">
          <h4 className="gig-title">{data['title']}</h4>
          <p>{data['short_desc']}</p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <NavLink to={`/services/${data['category']}/${data['_id']}`} className={"btn"}>see more</NavLink>
            <p className="gig-cost mb-0 fw-bold"><span className="fs-5"><TbCoinTaka /></span> {data['price']}</p>
          </div>
        </div>

        <div className="provider-detail">
          <div className="provider-img">
            <img src="" alt="" />
          </div>
          <h6>{data['provider']['serviceName']}</h6>
        </div>

      </div>
    </div>
  );
};

export default GigCards;