import { useEffect, useState } from 'react';
import SingleServiceHome from '../page-components/single-service-page-comps/SingleServiceHome';
import MasterLayout from './../components/layouts/MasterLayout';
import { gigByID } from '../helpers/api';
import { useParams } from 'react-router-dom';
import SingleServiceDescriptions from '../page-components/single-service-page-comps/SingleServiceDescriptions';

const SingleService = () => {

  const [data, setData] = useState({})
  const params = useParams()

  useEffect(() => {
    (async () => {
      let result = await gigByID(params.id)
      setData(result)
    })()
  }, [0])

  return (
    <MasterLayout>
      <SingleServiceHome data={data} />
      <SingleServiceDescriptions data={data} />
    </MasterLayout>
  );
};

export default SingleService;