import "./HomePage.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import Brand from "./brandItem/Brand";
import PriceFilter from "./Filter/PriceFilter";
import SortFilter from "./Filter/SortFilter";
import CardItem from "../../cardProducts/CardItem";
import { useSelector } from "react-redux/es/exports";
import { productSelector, showMoreSelector } from "../../../redux/selector";
import { useEffect } from "react";
import {
  fetchProductFailure,
  fetchProductSuccess,
} from "../../../redux/actions";
import ViewMore from "./viewMoreBtn/ViewMore";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);
  const showMore = useSelector(showMoreSelector);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://62c04057c134cf51cecbc33c.mockapi.io/products/"
        );
        dispatch(fetchProductSuccess(res.data));
        // console.log(res.data);
      } catch (error) {
        console.log(error.message);
        dispatch(fetchProductFailure(error.message));
      }
    };
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(">>>product", products);

  return (
    <>
      <div className="homePage_wrap grid wide">
        <Brand />
        <div className="filter" style={{ display: "flex" }}>
          <PriceFilter />
          <SortFilter />
        </div>

        <div className="product row no-gutters">
          {products.slice(0, showMore).map((product, index) => (
            <div key={index} className="col l-2-4">
              <CardItem
                image={product.image}
                name={product.name}
                price={product.price}
                crossPrice={product.crossPrice}
              />
            </div>
          ))}
        </div>

        <div className="viewMoreBtn">
          {products.length > 0 ? <ViewMore /> : ""}
        </div>
      </div>
    </>
  );
};
export default HomePage;
