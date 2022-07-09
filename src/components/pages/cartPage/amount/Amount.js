import "./Amount.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const AmountCounter = (props) => {
  const { amount, setAmount } = props;

  return (
    <>
      <div className="counter_wrap">
        <div className={amount <= 1 ? "disable" : "minus-btn"}>
          <i onClick={() => setAmount(amount - 1)}>
            <AiOutlineMinus />
          </i>
        </div>
        <h5>{amount}</h5>
        <div className="plus-btn">
          <i onClick={() => setAmount(amount + 1)}>
            <AiOutlinePlus />
          </i>
        </div>
      </div>
    </>
  );
};
