import "./CardItem.scss";
import { Link, useNavigate } from "react-router-dom";

const CardItem = (props) => {
  const { image, name, price, crossPrice, id } = props;
  const navigate = useNavigate();
  const handleToDetail = (id) => {
    navigate(`detail/ ${id}`);
  };
  return (
    <>
      <div
        title={name}
        onClick={() => handleToDetail(id)}
        className="cardItem_wrap"
      >
        <div className="cardItem_container">
          <div className="cardItem_img">
            <img src={image} alt="" />
          </div>
          <p className="cardItem_name">{name}</p>
          <div className="cardItem_price">
            <span>{price}đ</span>
            <span className="sale_price">{crossPrice ? crossPrice : "0"}đ</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
