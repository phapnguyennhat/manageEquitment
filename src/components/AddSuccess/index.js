import classNames from "classnames/bind";
import styles from "./AddSuccess.module.scss";

const cx = classNames.bind(styles);

function AddSuccess() {
  return (
    <div className={cx("add-cart-success")}>
      <div className={cx("add-cart-success-img")}>
        <img
          src="assets/imgs/check-solid.svg"
          alt="not found"
          className={cx("add-cart-success-icon")}
        />
      </div>
      <div className={cx("add-cart-success-msg")}>
        Cập nhật giỏ hàng thành công
      </div>
    </div>
  );
}

export default AddSuccess;
