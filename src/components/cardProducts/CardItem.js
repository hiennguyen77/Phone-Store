import "./CardItem.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formatVnd } from "../../helper";
import { setDetailProduct } from "../../redux/cart/action";

const CardItem = (props) => {
  const { image, name, price, crossPrice, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToDetail = (id) => {
    navigate(`detail/ ${id}`);
    dispatch(
      setDetailProduct({
        name,
        image,
        price,
        crossPrice,
        id,
      })
    );
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
            <span>{formatVnd(price)}</span>
            <span className="sale_price">
              {crossPrice ? formatVnd(crossPrice) : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
