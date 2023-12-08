import { useEffect, useState } from 'react';
import SingleServiceHome from '../page-components/single-service-page-comps/SingleServiceHome';
import MasterLayout from './../components/layouts/MasterLayout';
import { gigByID } from '../helpers/api';
import { useParams } from 'react-router-dom';
import SingleServiceDescriptions from '../page-components/single-service-page-comps/SingleServiceDescriptions';
import ReviewComponent from '../components/ReviewComponent';
import CommentReview from '../page-components/single-service-page-comps/CommentReview';

const SingleService = () => {

  const [data, setData] = useState({})
  const [load, setLoad] = useState(true)
  const params = useParams()

  useEffect(() => {
    (async () => {
      let result = await gigByID(params.id)
      setData(result)
    })()
  }, [load])

  return (
    <MasterLayout>
      <SingleServiceHome data={data} />
      <SingleServiceDescriptions data={data} />
      <ReviewComponent data={params} load={load} />
      <CommentReview load={setLoad} param={params} />
    </MasterLayout>
  );
};

export default SingleService;