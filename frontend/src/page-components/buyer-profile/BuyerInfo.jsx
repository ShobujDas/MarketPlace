import { useEffect, useState } from "react";
import { userProfile } from "../../helpers/api";

const BuyerInfo = () => {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    (async () => {
      let result = await userProfile()
      if(result){
        setProfile(result)
      }
    })()
  }, [0])

  return (
    <section className="my-section profile-section">
      <div className="container">
        
      </div>
    </section>
  );
};

export default BuyerInfo;