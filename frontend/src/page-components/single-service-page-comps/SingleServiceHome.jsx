import { FaStar } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton'

const SingleServiceHome = ({data}) => {
  
  return (
    <section className="single-service-home">
      <div className="hero-img">
        {
          data != null ? <img src={data['cover']} alt="" /> : <Skeleton className='w-100 h-100 d-block' />
        }
      </div>
      <div className="container">
        <div className="content py-5">
          {
            data != null ? 
              <>
                <h1 className="fs-3">{data['title']}</h1>
                <p className="reviews mt-2">
                  <span className="icon text-warning me-1 mb-1"><FaStar /></span>
                  {data['starNumber'] ? data['starNumber'].toFixed(2) : 0}
                  <span className="review amount ms-3 text-black-50">{data['totalStars'] ? data['totalStars'] : 0} reviews</span>
                </p>
              </> : <Skeleton count={3.2} />
          }
        </div>
      </div>
    </section>
  );
};

export default SingleServiceHome;