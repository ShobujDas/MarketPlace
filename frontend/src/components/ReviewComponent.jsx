import { useEffect, useState } from "react";
import ReviewCards from "./cards/ReviewCards";
import { getReviews } from "../helpers/api";

const ReviewComponent = ({data, load}) => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    (async () => {
      let result = await getReviews(data.id)
      setReviews(result)
    })()
  }, [load])

  return (
    <section className="review-section my-section">
      <div className="container">
        <div className="section-title border-bottom border-1 border-danger">
          <h3>Service <span>Reviews</span></h3>
          <p>Reviews from our precious buyers</p>
        </div>

        <div className="row">
          {
            reviews.length > 0 ? reviews.map((e, index) => (
              <ReviewCards data={e} key={index} />
            )) : <h5 className="text-center py-5 mt-5">No comments yet</h5>
          }
        </div>
      </div>
    </section>
  );
};

export default ReviewComponent;