import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import CartsDetail from "~/components/CartsDetail";
const cx = classNames.bind(styles);

function Header({ carts, nameUser }) {
  return (
    <div className={cx("header")}>
      <div className={cx("header__logo")}>
        <img alt="" src="https://mybk.hcmut.edu.vn/my/images/logo.png" />
      </div>
      <ul className={cx("header__navbar")}>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/a">
            Trang chủ
          </Link>
        </li>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/stock">
            Kho
          </Link>
        </li>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/register">
            Đăng ký vật dụng
          </Link>
        </li>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/alistregister">
            Danh sách đăng ký
          </Link>
        </li>
        <div className={cx("item-user")}>
          <img
            className={cx("header__navbar-item-img")}
            src="/assets/imgs/user-solid.svg"
            alt="not found"
          />
          <span>{nameUser}</span>
          <Link className={cx("header-cart-wrap", "item-link")} to="/register">
            <CartsDetail carts={carts} />
            <img
              src="/assets/imgs/cart-shopping-solid.svg"
              alt="not found"
              className={cx("header__navbar-item-img")}
            />
            <span className={cx("item-user-notice")}>{carts.length}</span>
          </Link>
        </div>
      </ul>
    </div>
  );
}
export default Header;
