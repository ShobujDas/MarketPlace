import MasterLayout from './../components/layouts/MasterLayout';
import BuyerProfileSideBar from './../components/BuyerProfileSideBar';
import { useState } from 'react';
import SellerInfo from '../page-components/seller-dashboard/SellerInfo';

const SellerDashBoard = () => {

  const [panel, setPanel] = useState(1)

  
  return (
    <MasterLayout>
      <BuyerProfileSideBar showPanel={setPanel}>

        {panel == 1 && <SellerInfo />}

      </BuyerProfileSideBar>
    </MasterLayout>
  );
};

export default SellerDashBoard;