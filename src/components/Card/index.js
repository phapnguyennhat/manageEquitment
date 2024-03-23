import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Card({ src, name, quantity }) {
  const [soluong, setSoluong] = useState(quantity);

  let msg = `Còn ${soluong}`;
  if (soluong === 0) {
    msg = "Hết";
  }

  const handleAdd = () => {
    // setSoluong((prev) => prev - getNum);
  };

  return (
    <div className={cx("card")}>
      <div className={cx("card-info")}>
        <img src={src} alt="not found" className={cx("card-info-img")} />
        <h3 className={cx("card-info-name")}>{name}</h3>
        <div className={cx("card-info-msg")}>{msg}</div>
        <div style={{ color: "red" }}>Thời gian mượn tối đa 7 ngày</div>
        <button className={cx("card-info-btn")} onClick={handleAdd}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}

export default Card;
