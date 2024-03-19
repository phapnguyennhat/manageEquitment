import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("header__logo")}>
        <img alt="" src="https://mybk.hcmut.edu.vn/my/images/logo.png" />
      </div>
      <ul className={cx("header__navbar")}>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/">
            Trang chủ
          </Link>
        </li>
        <li className={cx("header__navbar-item")}>
          <Link className={cx("item-link")} to="/stock">
            Kho
          </Link>
        </li>
        <li className={cx("header__navbar-item")}>Đăng ký vật dụng</li>
        <li className={cx("header__navbar-item")}>Danh sách đăng ký</li>

        <div className={cx("item-user")}>
          <img
            className={cx("header__navbar-item-img")}
            src="./user-solid.svg"
            alt="not found"
          />
          <span>Nguyễn Nhật Pháp</span>
        </div>
      </ul>
    </div>
  );
}
export default Header;
