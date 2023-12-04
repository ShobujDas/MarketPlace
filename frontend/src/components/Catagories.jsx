
import '../assets/catagories.css'
import { useEffect, useState } from 'react';
import CatagoriesListReq from '../helpers/api';
const Catagories = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
            (async ()=>{
                let result=await CatagoriesListReq()
                setData(result)
            })()
    },[])
    return (
        <>
           <div className="section">
                <div className="container">
                    <div className="row">
                        <h1 className="headline-4 text-center my-5 p-0">Top Categories</h1>
                            {
                                data.map((item,i)=>{
                                return(
                                    <div key={i} className="col-3 col-lg-8r text-center col-md-8r p-2">
                                    <div className="card h-100 rounded-3 ">
                                        <div className="card-body">
                                        <img id="catagoryImg" className="w-75" src={item['categoryImg']} alt={item['categoryName']}/>
                                        <h2 className="headline-2 mt-3">{item['categoryName']}</h2>
                                        </div>
                                    </div>
                                </div>
                                )

                                })

                            }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catagories;