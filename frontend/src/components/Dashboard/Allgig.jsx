import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import toast from "react-hot-toast";

function Allgig() {
  // const [allGigs, setAllGigs] = useState([]);

  // //getALL Products
  // const getAllGigs = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "path/url"
  //     );
  //     // console.log(data.products);
  //     if (data.success) {
  //       toast.success("Get all Producs");
  //       setAllGigs(data.products);
  //     } else {
  //       toast.error("Something went Wrong");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };

  // //lifecycel method
  // useEffect(() => {
  //   getAllGigs();
  // }, []);

  return (
    <DashboardLayout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">My Gig List</h1>
            <div className="d-flex flex-wrap mt-4">

              {/*
              {allGigs?.map((elem) => (
                <>
                <div className="card m-2" style={{ width: "18rem" }} key={elem._id}>
                  <img
                    src={`image source`}
                    className="card-img-top"
                    alt={elem.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{elem.name}</h5>
                    <p className="card-text">{elem.description}</p>
                  </div>
                </div>
                </>
              ))} */}

              <div
                className="card m-2"
                style={{ width: "10rem", height: "10rem" }}
              >
                <img
                  src={`https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png`}
                  className="card-img-top"
                  alt="photo"
                />
                <div className="card-body">
                  <h5 className="card-title">Gigs Title</h5>
                  <p className="card-text">
                    gig description
                  </p>
                </div>
              </div>
              <div
                className="card m-2"
                style={{ width: "10rem", height: "10rem" }}
              >
                <img
                  src={`https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png`}
                  className="card-img-top"
                  alt="photo"
                />
                <div className="card-body">
                  <h5 className="card-title">Gigs Title</h5>
                  <p className="card-text">
                    gig description
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Allgig;
