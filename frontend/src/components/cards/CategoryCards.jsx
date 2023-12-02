import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const CategoryCards = ({data}) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
      <div className="category-box">

        <img src={data['categoryImg']} alt="" />
        <div className="overlay">

          <p className="category-title mb-0">{data['categoryName']}</p>
          <p className="category-desc">{data['categoryDesc']}</p>

          <a href={`/services?category=${data._id}&page=1&limit=10`} className="icon">
            <FaLocationArrow />
          </a>

        </div>

      </div>
    </div>
  );
};

export default CategoryCards;