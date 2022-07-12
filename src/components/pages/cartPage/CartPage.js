import "./CartPage.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { AmountCounter } from "./amount/Amount";
import {
  cartProductSelector,
  totalPriceSelector,
} from "../../../redux/cart/selector.js";

import { formatVnd } from "../../../helper";
import Form from "./form/Form";

import {
  setAddCartProduct,
  setDeleteCartProduct,
  takeout1Product,
} from "../../../redux/cart/action.js";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartProductSelector);

  const totalPrice = useSelector(totalPriceSelector);

  const handleDeleteCart = (id) => {
    dispatch(setDeleteCartProduct(id));
  };

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
        {cartProducts.length > 0 ? (
          <div className="cart_container">
            {cartProducts.map((cartProduct, index) => (
              <div key={index} className="cart_list">
                <div className="product_wrap">
                  <div className="pr_image">
                    <img src={cartProduct.image} alt="" />
                    <div
                      onClick={() => handleDeleteCart(cartProduct.id)}
                      className="delete_pr"
                    >
                      <i>
                        <TiDeleteOutline />
                      </i>
                      <span>Xóa</span>
                    </div>
                  </div>

                  <div className="name_amount">
                    <h4>{cartProduct.name}</h4>
                    <div className="cart_amount">
                      <AmountCounter
                        onIncrement={() =>
                          dispatch(setAddCartProduct(cartProduct))
                        }
                        onDecrement={() =>
                          dispatch(takeout1Product(cartProduct))
                        }
                        amount={cartProduct.amount}
                      />
                    </div>
                  </div>
                </div>

                <div className="price_pr">
                  <p>{formatVnd(cartProduct.price)}</p>
                </div>
              </div>
            ))}
            <div className="total_price">
              <p>Tổng tiền:</p>
              <p>{formatVnd(totalPrice)}</p>
            </div>

            {/* form  */}

            <div className="Cart_Form">
              <Form totalPrice={totalPrice} cartProducts={cartProducts} />
            </div>
          </div>
        ) : (
          <div className="cart_Empty">
            <p className="empty_text">Không có sản phẩm trong giỏ hàng</p>
            <Link className="link_back_home" to="/">
              <div className="back_Home_btn">
                <p>Tiếp tục mua sắm</p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default CartPage;
