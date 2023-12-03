import { useLocation, useSearchParams } from "react-router-dom";
import { convertParams } from "../../helpers/helpers";
import { getAllGigs, getCategories, getGigsByCategory } from "../../helpers/api";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import CardLoader from './../../components/loaders/CardLoader';
import GigCards from './../../components/cards/GigCards';


const AllServicePageComp = () => {

  const { search } = useLocation()
  // params
  const [urlParams, SetUrlParams] = useSearchParams(search)
  let params = convertParams(new URLSearchParams(urlParams))


  const [categories, setCategories] = useState([])
  const [gigs, setGigs] = useState([])
  const [loader, setLoader] = useState(true)  

  // handle the filter changes
  let handleChange = (e) => {
    SetUrlParams(prev => {
      prev.set(e.target.name, e.target.value)
      return prev
    }, {replace: true})
    setLoader(true)
  }

  // get categories
  useEffect(() => {
    (async () => {
      let result = await getCategories()
      result && setCategories(result)
    })()
  }, [0])

  // get services
  useEffect(() => {
    if(params.category == "0"){
      (async () => {
        setLoader(true)
        let result = await getAllGigs(params.page, params.limit)
        result && setGigs(result.gigs)
        setTimeout(() => { setLoader(false) }, 500)
      })()
    }
    else{
      (async () => {
        setLoader(true)
        let result = await getGigsByCategory(params.category ,params.page, params.limit)
        result && setGigs(result.gigs)
        setTimeout(() => { setLoader(false) }, 500)
      })()
    }
  }, [urlParams])


  return (
    <section className="all-service my-section">
      <div className="container">

        <SectionTitle title="All Our" titleHighlight="Services" text="See and browse through all our services" />

        {/* filters */}
        <div className="filters mt-5">
          <form action="">
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">category</span>
                  <select className="form-select" id="category-opt" name="category" onChange={handleChange} value={params.category}>
                    <option value="0">All</option>
                    {
                      categories.map((e, index) => (
                        <option value={e._id} key={index} >{e.categoryName}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">services</span>
                  <select className="form-select" id="category-opt" name="limit" onChange={handleChange}>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>

            </div>
          </form>
        </div>

        {/* services */}
        <div className="services">
          {
            loader && <CardLoader />
          }

          <div className="row">
            {
              (gigs.length > 0 && !loader) ? gigs.map((e, index) => (
                <GigCards data={e} key={index} />
              )) : <p className="text-center my-5">No services found</p>
            }
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default AllServicePageComp;