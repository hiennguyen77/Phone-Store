import "./CardItem.scss";

const CardItem = () => {
  return (
    <>
      <div className="cardItem_wrap">
        <div className="cardItem_container">
          <div className="cardItem_img">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/210659/itel-it5092-gold-600x600.jpg"
              alt=""
            />
          </div>
          <p className="cardItem_name">nokia</p>
          <div className="cardItem_price">
            <span>10,000,000</span>
            <span className="sale_price">20,000,000</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardItem;
