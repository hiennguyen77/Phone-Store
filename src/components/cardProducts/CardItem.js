import "./CardItem.scss";

const CardItem = (props) => {
  const { image, name, price, crossPrice } = props;
  return (
    <>
      <div className="cardItem_wrap">
        <div className="cardItem_container">
          <div className="cardItem_img">
            <img src={image} alt="" />
          </div>
          <p className="cardItem_name">{name}</p>
          <div className="cardItem_price">
            <span>{price}đ</span>
            <span className="sale_price">{crossPrice}đ</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
