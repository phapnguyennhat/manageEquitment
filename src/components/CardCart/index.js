import classNames from "classnames/bind";
import styles from "./CardCart.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function CardCart(props) {
  // const [value, setValue] = useState("");
  const [display, setDisplay] = useState(true);
  // console.log(value);
  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   console.log(value);
  //   setInputValue(value);
  //   props.onChange(value);
  // };
  let msg = `Còn ${props.quantity}`;
  if (props.quantity === 0) {
    msg = "Hết";
  }

  return (
    <div>
      {display && (
        <div className={cx("card")}>
          <div className={cx("wrap-card")}>
            <div className={cx("card-img")}>
              <img src={props.src} alt="not found" />
            </div>
            <div className={cx("card-info")}>
              <div className={cx("card-info-name")}>{props.name}</div>
              <div className={cx("card-info-sl")}>{msg}</div>
              <button
                className={cx("card-info-btn")}
                onClick={() => setDisplay(false)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className={cx("cart-time")}>{props.time}</div>
          <div className={cx("cart-num")}>
            <input
              // value={inputValue}
              className={cx("cart-num-input")}
              type="number"
              min={0}
              max={props.quantity}
              // onchange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className={cx("cart-checkbox")}>
            <input
              type="checkbox"
              className={cx("cart-checkbox-input")}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardCart;
