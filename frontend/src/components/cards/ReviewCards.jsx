import { FaStar } from "react-icons/fa6";

const ReviewCards = ({data}) => {
  return (
    <>
    {
        data['desc'] && <div className="col-12 mt-3">
          <div className="review-box border-bottom border-1 ">
            <div className="d-flex align-items-center">
              <div className="buyer-img">
                <img src={data['user']['img']} alt="" />
              </div>

              <div className="comment ps-4 pt-2">
                <h6 className="mb-0">
                  <span className="me-2 commenter">{data['user']['firstName']} {data['user']['lastName']}</span>

                  <span className="review text-black-50">
                    <span className="icon text-warning me-1"><FaStar /></span>
                    <span>{data['Star']}</span>
                  </span>

                </h6>

                <p className="comment-date mb-0 mt-1">{data['createdAt'].substring(0, 10)}</p>
              </div>
            </div>

            <p className="comment-text mt-3">{data['desc']}</p>
          </div>
        </div>
    }
    </>
  );
};

export default ReviewCards;