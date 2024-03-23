import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import CardCart from "~/components/CardCart";
import { useState } from "react";

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

  // lấy value input từ các components

  // lấy dữ liệu giỏ hàng từ local về

  const cartsCheck = carts.filter((item) => item.check);

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
          <div className={cx('form-input-info')}>
            <p className={cx('information')}>Thông tin</p>
            <div className={cx('wrap-info')}>
              <div className={cx('wrap-info-left')}>
                <p className={cx('aboveleftinfo')}>Họ và tên</p>
                <input
                  type='text'
                  placeholder="Họ và tên"
                ></input>
              </div>
              <div className={cx('wrap-info-right')}>
                <p>Mã số sinh viên</p>
                <input
                  type='text'
                  placeholder="Mã số sinh viên"
                ></input>
              </div>
            </div>
          </div>
          <div className={cx('form-input-contact')}>
            <p>Liên hệ</p>
            <div className={cx('wrap-input-contact')}>
              <input
                className={cx('input-contact-left')}
                placeholder="Email"
              ></input>
              <input
                className={cx('input-contact-right')}
                placeholder="Số điện thoại"
              ></input>
            </div>
          </div>
          <div className={cx('form-input-time')}>
            <div className={cx('wrap-input-time')}>
              <div className={cx('time-in')}>
                <p>Ngày mượn</p>
                <input type='date'
                  placeholder="Ngày mượn"
                ></input>
              </div>
              <div className={cx('time-out')}>
                <p>Ngày trả</p>
                <input type='date'
                  placeholder='Ngày trả'
                ></input>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={cx("cart")}>
        <h3 className={cx("cart-title")}>Giỏ Hàng</h3>
        <div className={cx("container-table-head")}>
          <span className={cx("table-head-item", 'table-header')}>Vật Dụng</span>
          <span className={cx("table-head-item", 'table-head')}>Tình trạng</span>
          <span className={cx("table-head-item", 'table-head')}>Số lượng mượn</span>
          <span className={cx("table-head-item", 'table-head')}>Tùy chọn</span>
        </div>
        <ul className={cx("container-list-item")}>
          {carts.map((item, index) => (
            <li className={cx("container-item")}>
              <span className={cx("container-item__item", 'container-img')}>
                <img alt='' src={item.src}></img>

                <div className={cx('img-info')}>
                  <p>{item.name}</p>
                  <p>Số lượng: {item.quantity} cái</p>
                </div>

              </span>
              <span className={cx("container-item__item", 'item_item-status')}>Tốt</span>
              <span className={cx("container-item__item", 'item_item-quantity')}>
                <input
                  placeholder="Số lượng"
                  type="number"
                  min="0"
                  max={item.quantity}
                  className={cx("item-input")}
                />
              </span>
              <span className={cx("container-item__item", 'item-option')}>
                <div className={cx('item-input')}>
                  <input type="checkbox" className={cx("item-checkbox")} />Chọn
                </div>

                <div className={cx('item-delete')}>Xóa</div>
              </span>
            </li>
          ))}
        </ul>

        <div className={cx("confirm")}>
          <div className={cx("wrap-term")}>
            <input
              type="checkbox"
              className={cx("confirm-checkbox")}
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
            <label>Total: </label>
            <span>
              {" "}
              {cartsCheck.reduce(
                (total, item) => parseInt(total) + parseInt(item.getSL),
                0
              )}{" "}
            </span>
          </div>
          <button className={cx("confirm-submit")} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
