import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import MasterLayout from './../components/layouts/MasterLayout';
import CatagoriesListReq from '../helpers/api';
import CategoryCards from '../components/cards/CategoryCards';

const AllCategories = () => {

  const [category, setCategory] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    (async () => {
      let getCategory = await CatagoriesListReq()

      if (getCategory) {
        setCategory(getCategory)
        setLoader(false)
      }
    })()

  }, [0])

  return (
    <MasterLayout>
      <section className='my-section all-category'>
        <div className="container">

          <SectionTitle title={"Service"} titleHighlight={"categories"} text={"All our service categories"} />

          <div className="row mt-4">
            {
              category.length >= 0 && category.map((e, index) => (<CategoryCards data={e} key={index} />))
            }
          </div>

        </div>
      </section>
    </MasterLayout>
  );
};

export default AllCategories;