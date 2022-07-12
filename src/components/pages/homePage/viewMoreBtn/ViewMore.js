import { useState } from "react";
import { useDispatch } from "react-redux";
import "./ViewMore.scss";

import { BsArrowDownShort } from "react-icons/bs";
import { showMore } from "../../../../redux/products/action";

const ViewMore = (props) => {
  const [showMorePlus, setShowMorePlus] = useState(15);
  const dispatch = useDispatch();

  const handleShowMore = () => {
    setShowMorePlus(showMorePlus + 17);
    dispatch(showMore(showMorePlus + 17));
  };
  return (
    <>
      <div className="viewMore_wrap">
        <button onClick={handleShowMore} className="viewMore_btn">
          <p>Xem thêm</p>
          <i>
            <BsArrowDownShort />
          </i>
        </button>
      </div>
    </>
  );
};
export default ViewMore;
