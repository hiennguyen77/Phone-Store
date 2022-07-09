import "./CartPage.scss";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { AmountCounter } from "./amount/Amount";

const CartPage = () => {
  return (
    <>
      <div className="cartPage_wrap ">
        <div className="cart_header">
          <Link className="link_back_home" to="/">
            <div className="back_home_title">
              <i>
                <RiArrowLeftSLine />
              </i>
              <p>Mua thêm sản phẩm khác</p>
            </div>
          </Link>

          <p>Giỏ hàng của bạn</p>
        </div>

        <div className="cart_container">
          <div className="cart_list">
            <div className="product_wrap">
              <div className="pr_image">
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-600x600.jpg"
                  alt=""
                />
                <div className="delete_pr">
                  <i>
                    <TiDeleteOutline />
                  </i>
                  <span>Xóa</span>
                </div>
              </div>

              <div className="name_amount">
                <h4>iphone 14</h4>
                <div className="cart_amount">
                  <AmountCounter />
                </div>
              </div>
            </div>

            <div className="price_pr">
              <p>1999,000,000 đ</p>
            </div>
          </div>
          <div className="total_price">
            <p>Tổng tiền:</p>
            <p>199,000,000</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
