import "./NotFoundPage.scss";
const NotFoundPage = () => {
  return (
    <>
      <div className="notFound_wrap">
        <div className="notFound_container">
          <div className="img">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-4064375-3363936.png"
              alt="not-found"
            />
          </div>
          <h1>Not Found 404</h1>
          <p>Không tìm thấy trang.</p>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
