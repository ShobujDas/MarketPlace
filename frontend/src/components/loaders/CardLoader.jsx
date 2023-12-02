import Skeleton from 'react-loading-skeleton'

const CardLoader = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 mt-3">
        <div className="card shadow-sm h-100 rounded-2 bg-body-tertiary">
          <div className="card-body">
            <div className="mx-auto overflow-hidden" style={{height: "140px"}}>
              <Skeleton className='w-100 h-100 d-block' />
            </div>
            <div className="mt-4">
              <Skeleton count={2.7} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-3">
        <div className="card shadow-sm h-100 rounded-3 bg-body-tertiary">
          <div className="card-body">
            <div className="mx-auto overflow-hidden" style={{height: "140px"}}>
              <Skeleton className='w-100 h-100 d-block' />
            </div>
            <div className="mt-4">
              <Skeleton count={2.1} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-3">
        <div className="card shadow-sm h-100 rounded-3 bg-body-tertiary">
          <div className="card-body">
            <div className="mx-auto overflow-hidden" style={{height: "140px"}}>
              <Skeleton className='w-100 h-100 d-block' />
            </div>
            <div className="mt-4">
              <Skeleton count={2.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;