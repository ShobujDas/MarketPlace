import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import SectionTitle from './../../components/SectionTitle';
import { createReview } from '../../helpers/api';

const CommentReview = ({load, param}) => {

  const [seller, setSeller] = useState(() => {
    if (JSON.parse(sessionStorage.getItem('user'))){
      let type = JSON.parse(sessionStorage.getItem('user'))
      return type
    }
    else{
      return { isSeller: true }
    }
  })
  var loading = true
  const [review, setReview] = useState({
    GigId: param.id,
    UserId:seller._id,
    Star: 0,
    desc: "",
  })

  let changeRate = (e) => {
    setReview({...review, ['Star']: e})
  }

  let postReview = async () => {
    let result = await createReview(review)
    if(result == 1){
      load(!loading)
      setReview({
        GigId: param.id,
        UserId: seller._id,
        Star: 0,
        desc: "",
      })
    }
  }

  return (
    <section className="my-section comment-review bg-body-tertiary">
      <div className="container">

        <SectionTitle title={"Comment"} titleHighlight={"review"} text={"Leave your review here"} />

        <div className="mt-4">
          <StarRatings
            starDimension="20px"
            rating={review.Star}
            starRatedColor="red"
            changeRating={changeRate}
            numberOfStars={5}
            name='Star'
          />
          <textarea className='form-control mt-3' disabled={seller.isSeller == true} name='desc' value={review.desc} onChange={(e) => setReview({ ...review, [e.target.name]: e.target.value })} />
        </div>

        <button className={`bg-btns mt-4 ${seller.isSeller && "opacity-50"}`} disabled={seller.isSeller == true} onClick={postReview}>post review</button>

      </div>
    </section>
  );
};

export default CommentReview;