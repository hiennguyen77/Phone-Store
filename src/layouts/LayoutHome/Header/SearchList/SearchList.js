// import { useState } from "react";
import "./SearchList.scss";
import { useSelector } from "react-redux";
import { searchSelector, productSelector } from "../../../../redux/selector";

const SearchList = () => {
  const products = useSelector(productSelector);
  const searchText = useSelector(searchSelector);
  const productSearch = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText);
  });

  return (
    <>
      <div className="searchList_wrap">
        {productSearch.length > 0 ? (
          <div className="searchList_container">
            {productSearch.map((product, index) => (
              <div key={index} className="searchList_item">
                <img src={product.image} alt="" />
                <div className="searchList_name_price">
                  <p>{product.name}</p>
                  <span>{product.price}</span>
                  <span>{product.crossPrice ? product.crossPrice : ""}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "không có sp"
        )}
      </div>
    </>
  );
};
export default SearchList;
