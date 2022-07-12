import "./HomePage.scss";

import axios from "axios";
import { useDispatch } from "react-redux";
import CardItem from "../../cardProducts/CardItem";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";

import Brand from "./brandItem/Brand";
import PriceFilter from "./Filter/PriceFilter";
import SortFilter from "./Filter/SortFilter";
import {
  productSelector,
  showMoreSelector,
} from "../../../redux/products/selector";
import {
  fetchProductSuccess,
  fetchProductFailure,
} from "../../../redux/products/action";
// import productSlice from "../../../redux/products/productSlice";
import ViewMore from "./viewMoreBtn/ViewMore";
import { filterSortingSelector } from "../../../redux/filter-sorting/selector";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);
  const showMore = useSelector(showMoreSelector);
  const showProduct = products.slice(0, showMore);
  const sortingProduct = useSelector(filterSortingSelector);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://62c04057c134cf51cecbc33c.mockapi.io/products/"
        );

        dispatch(fetchProductSuccess(res.data));
      } catch (error) {
        console.log("error", error.message);
        dispatch(fetchProductFailure(error.message));
      }
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingProduct]);

  return (
    <>
      <div className="homePage_wrap grid wide">
        <Brand />

        <div className="filter" style={{ display: "flex" }}>
          <PriceFilter />
          <SortFilter />
        </div>
        {showProduct.length > 0 ? (
          <div className="product row no-gutters">
            {showProduct.map((product, index) => (
              <div key={index} className="col l-2-4 m-4 c-6">
                <CardItem
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  crossPrice={product.crossPrice}
                  id={product.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="no_showProduct_wrap">
            <img
              src="https://www.iamqatar.qa/assets/images/no-products-found.png"
              alt="no-produt"
            />
            <p className="no_showProduct">Không có sản phẩm này.</p>
          </div>
        )}

        <div className="viewMoreBtn">
          {products.length - showProduct.length > 0 ? <ViewMore /> : ""}
        </div>
      </div>
    </>
  );
};
export default HomePage;
