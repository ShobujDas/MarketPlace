import { useState } from 'react';
import BuyerProfileSideBar from '../components/BuyerProfileSideBar';
import BuyerInfo from '../page-components/buyer-profile/BuyerInfo';
import MasterLayout from './../components/layouts/MasterLayout';
import BuyerSettings from '../page-components/buyer-profile/BuyerSettings';

const BuyerProfile = () => {

  const [panel, setPanel] = useState(1)

  return (
    <MasterLayout>
      <BuyerProfileSideBar showPanel={setPanel}>
        
        {panel == 1 && <BuyerInfo />}
        {panel == 3 && <BuyerSettings />}

      </BuyerProfileSideBar>
    </MasterLayout>
  );
};

export default BuyerProfile;