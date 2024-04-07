import classNames from "classnames/bind";

import styles from "./Register.module.scss";
import CardCart from "~/components/CardCart";
import { useMemo, useState, useTransition } from "react";

const cx = classNames.bind(styles);
function Register({ carts, setCarts }) {
  // const [posts, setPosts] = useState([]);
  // var postApi = "assets/databases/cart.json";
  // useEffect(() => {
  //   fetch(postApi)
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     });
  // }, []);

  // hiện thông báo phải click vào nút điều khoản

  const [displayTerm, setDisplayTerm] = useState(false);

  function handleSubmit() {
    const confirm_checkbox = document.getElementById("confirm-checkbox");
    if (confirm_checkbox.checked === false) {
      console.log("ban can chon vao day");
      setDisplayTerm(true);
    } else {
      setDisplayTerm(false);
    }
  }

  // lấy dữ liệu giỏ hàng từ local về

  const total = useMemo(() => {
    const cartsCheck = carts.filter((item) => item.check);
    return cartsCheck.reduce(
      (result, item) => parseInt(result) + parseInt(item.getSL),
      0
    );
  }, [carts]);
  // const total = useMemo(() => {
  //   const cartsCheck = carts.filter((item) => item.check);
  //   return cartsCheck.reduce(
  //     (res, item) => (parseInt(res) + parseInt(item.getSL), 0)
  //   );
  // }, [carts]);

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
      {/* list */}
      <div className={cx("cart")}>
        <h3 className={cx("cart-title")}>Danh Sách Đăng Ký</h3>
        <table className={cx("container-table")}>
          <thead>
            <th className={cx("table-head-item")}>Chọn tất cả</th>
            <th className={cx("table-head-item")}>Vật Dụng</th>
            <th className={cx("table-head-item")}>Số lượng</th>
            <th className={cx("table-head-item")}>Thời gian mượn</th>
            <th className={cx("table-head-item")}>Xóa tất cả</th>
          </thead>
          <tbody className={cx("container-list-item")}>
            {carts.map((item, index) => (
              <CardCart
                key={index}
                src={item.src}
                quantity={item.quantity}
                name={item.name}
                time={item.time}
                getSL={item.getSL}
                check={item.check}
                state={item.state}
                setCarts={setCarts}
              />
            ))}
          </tbody>
        </table>

        <div className={cx("wrapper-confirm")}>
          <div className={cx("confirm")}>
            <div className={cx("wrap-term")}>
              <input
                type="checkbox"
                className={cx("confirm-checkbox", "custom-checkbox")}
                id="confirm-checkbox"
              />
              <span className={cx("confirm-msg")}>
                Tôi Đồng Ý Với Điều Khoản Cam Đoan Sẽ Trả Đủ
              </span>
            </div>
            {displayTerm && (
              <div className={cx("click-here")}>Bạn cần chọn vào đây!</div>
            )}
            <div className={cx("wrap-total")}>
              <label>Tổng: </label>
              <span>{total}</span>
            </div>
            <button className={cx("confirm-submit")} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
