import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header_wrap grid wide ">
        <div className="header_container">
          <div className="logo">
            <h1>Phone Store</h1>
          </div>
          <div className="input_search">
            <input name="search" type="text" placeholder="Bạn cần tìm..." />
            <i>
              <BiSearch />
            </i>
          </div>
          <div className="cart_icon">
            <i>
              <BsFillBagFill />
            </i>
            <span>(4)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
