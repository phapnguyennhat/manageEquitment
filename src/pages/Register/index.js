import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CardCart from "~/components/CardCart";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function Register() {
  const [posts, setPosts] = useState([]);
  var postApi = "assets/databases/cart.json";
  useEffect(() => {
    fetch(postApi)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className={cx("container")}>
      <h3 className={cx("container__title")}>Đăng ký vật dụng</h3>
      <div className={cx("container__direction")}>
        <span>Trang chủ </span>
        <img
          className={cx("container__direction-img")}
          src="/assets/imgs/chevron-right-solid.svg"
          alt="not found"
        />
        <span>Đăng ký vật dụng</span>
      </div>
      <div className={cx("container-form")}>
        <div className={cx("container-form-title")}>Thông Tin Người Mượn</div>
        <div className={cx("container-form-input")}>
          <div>Họ và tên</div>
          <div className={cx("wrap-input-name")}>
            <input
              className={cx("form-input-info")}
              type="text"
              placeholder="First Name"
              style={{ flex: 1 }}
            />
            <input
              className={cx("form-input-info")}
              type="text"
              placeholder="Last Name"
              style={{ flex: 1 }}
            />
          </div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Mã Số Sinh Viên"
          />
          <div>Liên hệ</div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Email address"
          />
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Số điện thoại"
          />
          <div>Địa chỉ giao</div>
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Tỉnh/Thành phố"
          />
          <input
            className={cx("form-input-info")}
            type="text"
            placeholder="Địa chỉ"
          />
        </div>
      </div>
      <div className={cx("cart")}>
        <h3 className={cx("cart-title")}>Giỏ Hàng</h3>
        <div className={cx("container-table-head")}>
          <span className={cx("table-head-item")}>Vật Dụng</span>
          <span className={cx("table-head-item")}>Thời Hạn</span>
          <span className={cx("table-head-item")}>Quantity</span>
          <span className={cx("table-head-item")}>Select</span>
        </div>
        <ul className={cx("container-list-item")}>
          {posts.map((item) => (
            <li className={cx("container-item")}>
              <span className={cx("container-item__item")}>
                <CardCart
                  src={item.src}
                  quantity={item.quantity}
                  name={item.name}
                />
              </span>
              <span className={cx("container-item__item")}>8 ngày</span>
              <span className={cx("container-item__item")}>
                <input
                  type="number"
                  min="0"
                  max={item.quantity}
                  className={cx("item-input")}
                />
              </span>
              <span className={cx("container-item__item")}>
                <input type="checkbox" className={cx("item-checkbox")} />
              </span>
            </li>
          ))}
        </ul>

        <div className={cx("confirm")}>
          <div className={cx("wrap-term")}>
            <input type="checkbox" className={cx("confirm-checkbox")} />
            <span className={cx("confirm-msg")}>
              Tôi Đồng Ý Với Điều Khoản Cam Đoan Sẽ Trả Đủ
            </span>
          </div>
          <div className={cx("wrap-total")}>
            <label>Total: </label>
            <span>10</span>
          </div>
          <button className={cx("confirm-submit")}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
