import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { getGigsBySeller } from "../../helpers/api";
import GigCards from './../../components/cards/GigCards';
import CardLoader from "../../components/loaders/CardLoader";

const SellerGigs = ({id}) => {

  const [gigs, setGigs] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    (async () => {
      setLoader(true)
      let result = await getGigsBySeller(id, 1, 20)
      if(result){
        setGigs(result.gigs)
      }
      setLoader(false)
    })()
  }, [0])

  return (
    <section className="my-section bg-body-tertiary">
      <div className="container">

        <SectionTitle title={"Provider"} titleHighlight={"services"} text={"Services from the provider"} />

        <div className="row">
          {
            loader && <CardLoader />
          }
          {
            (gigs.length > 0 && !loader) ? gigs.map((e, index) => (
              <GigCards data={e} key={index} />
            )) : <p className="py-5 text-center">No Services found</p>
          }
        </div>
      </div>
    </section>
  );
};

export default SellerGigs;