import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { setFilterPrice } from "../../../../redux/filter-sorting/action";
import { filterPriceSelector } from "../../../../redux/filter-sorting/selector";

import "./Filter.scss";
import { filterPriceData } from "./data";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const filterPrice = useSelector(filterPriceSelector);
  // console.log(filterPrice); => {label:, value:}

  return (
    <>
      <div className="PriceFilter_wrap">
        <p>Chọn mức giá:</p>
        <div className="price_select">
          <Select
            className="select"
            isSearchable={false}
            value={filterPrice}
            onChange={(payload) => dispatch(setFilterPrice(payload))}
            options={filterPriceData}
          />
        </div>
      </div>
    </>
  );
};
export default PriceFilter;
