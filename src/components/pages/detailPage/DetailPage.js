import "./DetailPage.scss";
import { detailData } from "./detail-data";
import { useSelector } from "react-redux";
import { detailProductSelector } from "../../../redux/selector";
import { formatVnd } from "../../../helper";
const DetailPage = () => {
  const detailProduct = useSelector(detailProductSelector);
  return (
    <>
      <div className="detailPage_wrap grid wide">
        <h1 className="detail_name">{detailProduct.name}</h1>
        <div className="row no-gutters">
          <div className="col l-6">
            <div className="detail_img">
              <img src={detailProduct.image} alt="" />
            </div>
          </div>
          <div className="col l-6">
            <div className="detail_price">
              <h1 className="detail_sale">{formatVnd(detailProduct.price)}</h1>
              <h1 className="detail_through">
                {detailProduct.crossPrice
                  ? formatVnd(detailProduct.crossPrice)
                  : ""}
              </h1>
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

            <button className="buy_btn">
              <p>Mua ngay</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailPage;
