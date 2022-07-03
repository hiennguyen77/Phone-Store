import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import SearchList from "./SearchList/SearchList";
import { searchProduct } from "../../../redux/actions";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    setInputText(e.target.value.trim());
    dispatch(searchProduct(e.target.value));
  };

  return (
    <>
      <div className="header_wrap grid wide ">
        <div className="header_container">
          <Link className="logo_link" to="/">
            <div className="logo">
              <h1>Phone Store</h1>
            </div>
          </Link>
          <div className="input_search">
            <input
              onChange={handleSearchText}
              value={inputText}
              placeholder="Bạn cần tìm..."
            />
            <i>
              <BiSearch />
            </i>
            {inputText && (
              <div className="searchList">
                <SearchList />
              </div>
            )}
          </div>
          <Link className="cart_link" to="cart">
            <div className="cart_icon">
              <i>
                <BsFillBagFill />
              </i>
              <span>(4)</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
