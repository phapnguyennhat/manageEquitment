import classNames from "classnames/bind";
import styles from "./CardCart.module.scss";
import { memo, useState } from "react";

const cx = classNames.bind(styles);
function CardCart(props) {
  const [display, setDisplay] = useState(true);

  let msg = `Số lượng:  ${props.quantity} cái`;
  if (props.quantity === 0) {
    msg = "Hết";
  }
  let storageCarts;
  const [numInput, setNumInput] = useState(props.getSL);
  const [check, setCheck] = useState(props.check);
  // const [carts, setCarts] = useState(() => {
  //   storageCarts = JSON.parse(localStorage.getItem("carts"));
  //   return storageCarts ?? [];
  // });

  const handleRemove = () => {
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    storageCarts = storageCarts.filter((item) => item.name !== props.name);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setDisplay(false);
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };

  const handleChange = (e) => {
    // setNumInput(e.target.value);
    // props.onChange(e.target.value); //luu value vao array // tuong lai se luu object vao day luon
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    let itemFind = storageCarts.find((item) => item.name === props.name);
    let value = e.target.value;
    itemFind.getSL = value;
    setNumInput(value);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };
  const handleCheckbox = (e) => {
    storageCarts = JSON.parse(localStorage.getItem("carts")) ?? [];
    let itemFind = storageCarts.find((item) => item.name === props.name);
    let value = e.target.checked;
    itemFind.check = value;
    setCheck(e.target.checked);
    localStorage.setItem("carts", JSON.stringify(storageCarts));
    // setCarts(storageCarts);
    props.setCarts(storageCarts);
  };

  // console.log(carts);

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
            </div>
          </div>
          <div
            className={cx("cart-state", {
              "cart-state--green": props.state === "tốt",
            })}
          >
            {props.state}
          </div>
          <div className={cx("cart-num")}>
            <input
              value={numInput}
              className={cx("cart-num-input")}
              type="number"
              min={0}
              max={props.quantity}
              onChange={handleChange}
              // placeholder="Số lượng"
            />
          </div>
          <div className={cx("cart-checkbox")}>
            <input
              type="checkbox"
              className={cx("cart-checkbox-input")}
              id="checkbox-input"
              checked={check}
              onClick={handleCheckbox}
            ></input>
            <button className={cx("card-info-btn")} onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(CardCart);
