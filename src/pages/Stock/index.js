import classNames from "classnames/bind";
import styles from "./Stock.module.scss";
import Card from "~/components/Card";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function Stock(props) {
  const [posts, setPosts] = useState([]);
  var postApi = "assets/databases/stockdb.json";
  useEffect(() => {
    fetch(postApi)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <h3 className={cx("container__title")}>Kho</h3>
      <div className={cx("container__direction")}>
        <span>Trang chủ </span>
        <img
          className={cx("container__direction-img")}
          src="/assets/imgs/chevron-right-solid.svg"
          alt="not found"
        />
        <span>Kho</span>
      </div>
      <div className={cx("grid")}>
        <div className={cx("grid-row")}>
          <div className={cx("wrap-btn-select")}>
            <div className={cx("wrap-select-icon")}>
              <button className={cx("btn-select", "btn")}>Danh mục</button>
              <img
                className={cx("btn-add-icon")}
                src="/assets/imgs/chevron-down-solid.svg"
                alt="not found"
              />
            </div>
            <ul className={cx("list-option")}>
              <li className={cx("option-item")}>Đồ trang trí</li>
              <li className={cx("option-item")}>Văn phòng phẩm</li>
              <li className={cx("option-item")}>Đồ chơi</li>
              <li className={cx("option-item")}>Sự kiện</li>
              <li className={cx("option-item")}>Thiết bị</li>
            </ul>
          </div>
          <button
            className={cx("btn-add", "btn", {
              "btn-add--disabled": props.typeUser === "user",
            })}
          >
            Thêm sản phẩm
          </button>
        </div>

        {/* card */}
        <div className={cx("grid-card")}>
          {posts.map((item) => (
            <Card
              src={item.src}
              name={item.name}
              quantity={item.quantity}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stock;
