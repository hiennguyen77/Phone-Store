import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="Footer_wrap grid wide">
        <div className="footer_container">
          <div className="footer_phone">
            <p>Số điện thoại hỗ trợ:</p>
            <h4>1900.000</h4>
          </div>
          <div className="footer_address">
            <h4>Địa chỉ:</h4>
            <p>Nhà J5, p.An Bình, tx.Dĩ An, Bình Dương</p>
          </div>
          <div className="copy_righting">
            <p>Copyright by Nguyen Chi Hien © 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
