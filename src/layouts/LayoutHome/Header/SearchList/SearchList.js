import "./SearchList.scss";

const SearchList = () => {
  return (
    <>
      <div className="searchList_wrap">
        <div className="searchList_container">
          <div className="searchList_item">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/210659/itel-it5092-gold-600x600.jpg"
              alt=""
            />
            <div className="searchList_name_price">
              <p>name</p>
              <span>122222</span>
              <span>giảm giá 100000</span>
            </div>
          </div>

          <div className="searchList_item">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/210659/itel-it5092-gold-600x600.jpg"
              alt=""
            />
            <div className="searchList_name_price">
              <p>name</p>
              <span>122222</span>
              <span>giảm giá 100000</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchList;
