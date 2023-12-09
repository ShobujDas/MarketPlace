import { useParams } from "react-router-dom";
import MasterLayout from "../components/layouts/MasterLayout";
import Profile from './../page-components/seller-profile/Profile';
import SellerGigs from "../page-components/seller-profile/SellerGigs";

const SellerProfile = () => {

  const params = useParams()

  return (
    <MasterLayout>
      <Profile id={params.id} />
      <SellerGigs id={params.id} />
    </MasterLayout>
  );
};

export default SellerProfile;