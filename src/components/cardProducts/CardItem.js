import "./CardItem.scss";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProductFailure, fetchProductSuccess } from "../../redux/actions";

const CardItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/products?_page=10");
        // dispatch(fetchProductSuccess(res.data));
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
        dispatch(fetchProductFailure(error.message));
      }
    };
    getProducts();
  }, []);

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
