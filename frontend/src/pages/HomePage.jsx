import HomePageComponent from '../page-components/HomePageComps/HomePageComponent';
import MasterLayout from './../components/layouts/MasterLayout';

const HomePage = () => {
  return (
    <>
      <MasterLayout>
            <HomePageComponent />
      </MasterLayout>
    </>
  );
};

export default HomePage;