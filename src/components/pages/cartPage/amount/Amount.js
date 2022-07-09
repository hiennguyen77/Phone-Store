import "./Amount.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const AmountCounter = (props) => {
  const { amount, onIncrement, onDecrement } = props;

  return (
    <>
      <div className="counter_wrap">
        <div className={amount <= 1 ? "disable" : "minus-btn"}>
          <i onClick={(...args) => onDecrement(...args)}>
            <AiOutlineMinus />
          </i>
        </div>
        <h5>{amount}</h5>
        <div className="plus-btn">
          <i onClick={(...args) => onIncrement(...args)}>
            <AiOutlinePlus />
          </i>
        </div>
      </div>
    </>
  );
};
