import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const SellerInfo = () => {

  const [data, setData] = useState({
    serviceName: "",
    email: "",
    img: "",
    country: "",
    phone: "",
    des: "",
    short_des: "",
    city: "",
    road: "",
    houseNo: "",
  })

  return (
    <section className="seller-info my-5">
      <div className="container">

        <SectionTitle title={"Your"} titleHighlight={"profile"} text={"See your information here"} />

        


      </div>
    </section>
  );
};

export default SellerInfo;