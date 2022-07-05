import "./DetailPage.scss";
import { detailData } from "./detail-data";
const DetailPage = () => {
  return (
    <>
      <div className="detailPage_wrap grid wide">
        <h1 className="detail_name">iPhone</h1>
        <div className="row no-gutters">
          <div className="col l-6">
            <div className="detail_img">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col l-6">
            <div className="detail_price">
              <h1>199999</h1>
              <h1>10000</h1>
            </div>
            <div className="detail_parameter">
              <h1>Thông số kỹ thuật</h1>
              {detailData.map((detail, index) => (
                <div key={index} className="parameter">
                  <span>{detail.name}</span>
                  <span>{detail.parameter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPage;
