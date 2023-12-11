import { FaStar } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const GigCards = ({data}) => {
  return (
    <div className="col-lg-4 col-md-6 mt-3">
      <div className="gig-box">

        <NavLink to={`/services/${data['category']}/${data['_id']}`} className={"text-decoration-none"}>
          {/* gig cover */}
          <div className="gig-cover">
            <img src={data['cover']} alt="" />
          </div>

          {/* gig text content */}
          <div className="text-content">
            <NavLink to={`/services/${data['category']}/${data['_id']}`} className="gig-title">{data['title']}</NavLink>
            <p className="text-dark">{data['short_desc']}</p>

            <p className="reviews mb-2 text-black">
              <span className="icon text-warning me-1 mb-1"><FaStar /></span>
              {data['starNumber'].toFixed(2)}
              <span className="review amount ms-3 text-black-50">{data['totalStars']} reviews</span>
            </p>
          </div>

          {/* gig provider */}
          <div className="provider-box">
            <div className="provider-detail">
              <div className="provider-img">
                <img src={data['provider']['img']} alt="" />
              </div>
              <NavLink className="ms-2 text-decoration-none text-black" to={`/profile/${data['provider']['_id']}`}>{data['provider']['serviceName']}</NavLink>
            </div>

            <div className="price"><p className="mb-0 fw-bold">৳ {data['price']}</p></div>
          </div>
        </NavLink>
        
      </div>
    </div>
  );
};

export default GigCards;