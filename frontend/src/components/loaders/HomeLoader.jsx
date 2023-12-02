import Skeleton from 'react-loading-skeleton'

const HomeLoader = () => {
  return (
    <div className="container-fluid hero-bg">
      <div className="row">
        <div className="col-lg-6">
          <div className="overflow-hidden pt-5" style={{ height: "240px" }}>
            <Skeleton className='w-100 h-100 d-block' />
          </div>
          <div className="mt-4">
            <Skeleton count={2.7} />
          </div>
          <div className="mt-3">
            <Skeleton count={3.2} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-5">
            <div className="mt-4">
              <Skeleton count={2.7} />
            </div>
            <div className="mt-3">
              <Skeleton count={3.2} />
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default HomeLoader;