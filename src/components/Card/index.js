import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Card(props) {
  let msg = `Còn ${props.quantity}`;
  if (props.quantity === 0) {
    msg = "Hết";
  }

  const handleAdd = () => {
    // setSoluong((prev) => prev - getNum);
  };

  return (
    <div className={cx("card")}>
      <div className={cx("card-info")}>
        <img src={props.src} alt="not found" className={cx("card-info-img")} />
        <h3 className={cx("card-info-name")}>{props.name}</h3>
        <div className={cx("card-info-msg")}>{msg}</div>
        <div style={{ color: "red" }}>Thời hạn mượn {props.time}</div>
        <button className={cx("card-info-btn")} onClick={handleAdd}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default Card;
