import "./Modal.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

const Modal = (props) => {
  const navigate = useNavigate();
  const { setOpenModal, openModal } = props;
  const [confirmSuccess, setConfirmSuccess] = useState(false);

  const handleConfirmSuccess = () => {
    setConfirmSuccess(!confirmSuccess);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <div className="modal_wrap"></div>
      {confirmSuccess ? (
        <div className="confirmSuccess">
          <i>
            <BsCheckCircleFill />
          </i>
          <h2>ĐÃ HỦY THÀNH CÔNG !</h2>
        </div>
      ) : (
        <div className="modal_table">
          <h2>HỦY ĐƠN HÀNG</h2>
          <p>Bạn chắc chắn muốn hủy đơn hàng này ?</p>
          <div className="button">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="close_btn"
            >
              <p>ĐÓNG</p>
            </button>
            <button onClick={handleConfirmSuccess} className="confirm_btn">
              <p>XÁC NHẬN HỦY</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
