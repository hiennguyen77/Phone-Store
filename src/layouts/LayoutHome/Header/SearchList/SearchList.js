// import { useState } from "react";
import "./SearchList.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchSelector } from "../../../../redux/filter-sorting/selector";
import { productSelector } from "../../../../redux/products/selector";
import { formatVnd } from "../../../../helper";
import { setDetailProduct } from "../../../../redux/cart/action";

const SearchList = (props) => {
  const { setInputText } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(productSelector);
  const searchText = useSelector(searchSelector);
  const productSearch = products.filter((product) => {
    return product.name.toLowerCase().includes(searchText);
  });

  const handleToDetail = (product) => {
    const { name, image, price, crossPrice, id } = product;
    navigate(`detail/ ${id}`);
    dispatch(
      setDetailProduct({
        name,
        image,
        price,
        crossPrice,
        id,
      })
    );
    setInputText("");
  };

  return (
    <>
      {productSearch.length > 0 ? (
        <div className="searchList_wrap">
          <div className="searchList_container">
            {productSearch.map((product, index) => (
              <div
                onClick={() => handleToDetail(product)}
                key={index}
                className="searchList_item"
              >
                <img src={product.image} alt="" />
                <div className="searchList_name_price">
                  <p>{product.name}</p>
                  <div className="price">
                    <span>{formatVnd(product.price)}</span>
                    <span>
                      {product.crossPrice ? formatVnd(product.crossPrice) : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no_product">
          <p>Không tìm thấy sản phẩm.</p>
        </div>
      )}
    </>
  );
};
export default SearchList;
