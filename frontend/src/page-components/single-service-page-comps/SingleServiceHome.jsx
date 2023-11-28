import { FaStar } from "react-icons/fa6";

const SingleServiceHome = ({data}) => {
  return (
    <section className="single-service-home">
      <div className="hero-img">
        <img src={data['cover']} alt="" />
      </div>
      <div className="container">
        <div className="content py-5">
          <h1 className="fs-3">{data['title']}</h1>
          <p className="reviews mt-2">
            <span className="icon text-warning me-1 mb-1"><FaStar /></span>
            {data['starNumber'] ? data['starNumber'].toFixed(2) : 0}
            <span className="review amount ms-3 text-black-50">{data['totalStars'] ? data['totalStars'] : 0} reviews</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceHome;