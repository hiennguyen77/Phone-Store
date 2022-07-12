import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.scss";
import { sorting } from "./data";
import { setSorting } from "../../../../redux/filter-sorting/action";
import { filterSortingSelector } from "../../../../redux/filter-sorting/selector";

const SortFilter = () => {
  const dispatch = useDispatch();
  const filterSorting = useSelector(filterSortingSelector);
  // console.log(filterSorting);

  return (
    <>
      <div className="PriceFilter_wrap">
        <p>Sắp xếp theo:</p>
        <div className="price_select">
          <Select
            className="select"
            isSearchable={false}
            value={filterSorting}
            onChange={(payload) => dispatch(setSorting(payload))}
            options={sorting}
          />
        </div>
      </div>
    </>
  );
};
export default SortFilter;
