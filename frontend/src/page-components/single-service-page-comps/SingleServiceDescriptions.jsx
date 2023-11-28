import parse from 'html-react-parser'
import ProfileCards from '../../components/cards/ProfileCards';
import { useEffect, useState } from 'react';
import { sellerById } from '../../helpers/api';

const SingleServiceDescriptions = ({data}) => {

  const [seller, setSeller] = useState({})
  
  useEffect(() => {
    (async () => {
      
      if (data['sellerId']){
        let result = await sellerById(data['sellerId'])
        setSeller(result)
      }

    })()
  }, [data])


  return (
    <section className="single-service-desc my-section bg-body-tertiary">
      <div className="container">
        <div className="row">

          <div className="col-lg-8">
            <div className="text-content p-3 rounded-2 bg-body shadow">
              <h4 className="border-bottom border-1 border-danger pb-2 mb-3">Description</h4>
              <div className="gig-details">
                {parse(data['desc'] ? data['desc'] : "<p>No details found</p>")}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <ProfileCards data={seller} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SingleServiceDescriptions;