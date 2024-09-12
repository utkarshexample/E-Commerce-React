const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center spinner-conatiner">
        <div className="spinner-border" role="status">
          <span className="sr-only hidden"></span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
