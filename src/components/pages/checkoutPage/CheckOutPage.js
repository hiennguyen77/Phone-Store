import "./CheckOutPage.scss";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { submitFormSelector } from "../../../redux/selector";
import { formatVnd } from "../../../helper";

const CheckOutPage = () => {
  const infoClient = useSelector(submitFormSelector);
  const {
    cartProducts,
    district,
    gender,
    name,
    provinces,
    street,
    totalPrice,
    wards,
  } = infoClient;

  //   console.log(infoClient);
  return (
    <>
      <div className="checkOut_wrap">
        <div className="checkOut_container">
          <div className="success_message">
            <i>
              <BsCheckCircleFill />
            </i>
            <h2>ĐẶT HÀNG THÀNH CÔNG</h2>
          </div>
          <div className="thank_text">
            <p>
              Cảm ơn<span>{gender.gender}</span>đã cho Phonee cơ hội được phục
              vụ. Trong 10 phút, nhân viên Phonee sẽ{" "}
              <span>gửi tin nhắn hoặc gọi điện</span>
              xác nhận giao hàng cho anh.
            </p>
          </div>

          <div className="info">
            <h2>THÔNG TIN ĐẶT HÀNG:</h2>
            <li>
              Người nhân: <span>{name}</span>{" "}
            </li>
            <li>
              Địa chỉ nhận hàng:{" "}
              <span>
                {street}, {wards.label}, {district.label}, {provinces.label}
              </span>
            </li>
            <li>
              Tổng tiền: <span>{formatVnd(totalPrice)}</span>
            </li>
          </div>
          <button className="cancel_order">
            <p>Hủy đơn hàng</p>
          </button>
          <div className="contact">
            <p>Khi cần hỗ trợ vui lòng gọi:</p>
            <p>1900.0000</p>
          </div>

          <h2 className="product_buy_title">SẢN PHẨM ĐÃ MUA</h2>

          {cartProducts.map((cartProduct, index) => (
            <div key={index} className="product_buy">
              <div className="img_name">
                <img src={cartProduct.image} alt="" />
                <div className="name_amount">
                  <p>{cartProduct.name}</p>
                  <p>
                    Số lượng: <span>{cartProduct.amount}</span>
                  </p>
                </div>
              </div>
              <p className="price">{formatVnd(cartProduct.price)}</p>
            </div>
          ))}
          <Link className="back_home_link" to="/">
            <div className="back_home">
              <p>VỀ TRANG CHỦ</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
