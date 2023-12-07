import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function Creategigpage() {
  const [data, setData] = useState({
    sellerId: "",
    title: "",
    desc: "",
    short_desc: "",
    totalStars: "",
    starNumber: "",
    category: "",
    short_des: "",
    price: "",
    cover: "",
    images: "",
    shortTitle: "",
    deliveryTime: "",
    revisionNumber: "",
    features: "",
    sales: "",
    isActive: "",
  });

  let handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [photo, setPhoto] = useState();

  return (
    <DashboardLayout>
      <div className="container rounded bg-white mb-5">
        <div className="row">
          <div className="col-md-12 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Create Gig</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">SellerId</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={data.sellerId}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    value={data.category}
                    onChange={(e) => handleData(e)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 mt-3">
                  <label className="labels">Gig Title</label>
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="enter phone number"
                    value={data.title}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Short Title</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Write Short Description"
                    value={data.shortTitle}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Description</label>
                  <textarea
                    type="Country"
                    className="form-control"
                    placeholder="Country"
                    value={data.country}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Short Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={data.short_des}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Price</label>
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="Road Number"
                    value={data.price}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Cover</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="House Number"
                    value={data.cover}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">DelivaryTime</label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="Write Description"
                    value={data.deliveryTime}
                    onChange={(e) => handleData(e)}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Revision Number</label>
                  <input
                    type="textarea"
                    className="form-control"
                    placeholder="Write Description"
                    value={data.revisionNumber}
                    onChange={(e) => handleData(e)}
                  />
                </div>

                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                 
                  <div className="mb-3">
                    <label className="btn btn-outline-secondary col-md-12">
                      {photo ? photo.name : "Upload Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        value={data.photo}
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Creategigpage;
