import { IoCallSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const ProfileCards = ({data}) => {
  return (
    <div className="profile-card shadow p-3 rounded-2">
      <div className="seller-img">
        <img src={data['img']} alt="" />
      </div>
      <h5 className="pt-4 text-center fs-5 pb-3 border-bottom border-1 border-danger">{data['serviceName']}</h5>
      <div className="seller-contact px-3 pt-4 pb-3 border-bottom border-1 border-danger">
        <a href={`tel:+${data['phone']}`} className="seller-contact-info fs-6"> <span className="icon me-2"><IoCallSharp /></span> {data['phone']}</a>
        <a href={`mailto:${data['email']}`} className="seller-contact-info fs-6"> <span className="icon me-2"><MdOutlineAlternateEmail /></span> {data['email']}</a>
      </div>

      <NavLink className="btn bg-btns mt-4">See provider</NavLink>
    </div>
  );
};

export default ProfileCards;