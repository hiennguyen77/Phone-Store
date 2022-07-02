import Select from "react-select";
import { useState } from "react";
import "./Filter.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const SortFilter = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <>
      <div className="PriceFilter_wrap">
        <p>Sắp xếp theo:</p>
        <div className="price_select">
          <Select
            className="select"
            isSearchable={false}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
      </div>
    </>
  );
};
export default SortFilter;