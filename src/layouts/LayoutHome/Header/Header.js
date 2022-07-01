import { useState } from "react";
// import { useDispatch } from "react-redux";
import "./Header.scss";
import { BiSearch } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import SearchList from "./SearchList/SearchList";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const [openSearchList, setOpenSearchList] = useState(false);
  // const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="header_wrap grid wide ">
        <div className="header_container">
          <div className="logo">
            <h1>Phone Store</h1>
          </div>
          <div className="input_search">
            <input
              onChange={handleSearchChange}
              value={inputText}
              name="search"
              placeholder="Bạn cần tìm..."
            />
            <i>
              <BiSearch />
            </i>
            {openSearchList && (
              <div className="searchList">
                <SearchList />
              </div>
            )}
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
