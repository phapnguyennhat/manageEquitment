import classNames from "classnames/bind";
import styles from "./Stock.module.scss";
import Card from "~/components/Card";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function Stock(props) {
  const [posts, setPosts] = useState([]);
  const [displayStock, setDisplayStock] = useState([]);
  var postApi = "assets/databases/stockdb.json";
  useEffect(() => {
    fetch(postApi)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        return posts;
      })
      .then((posts) => {
        setDisplayStock(posts);
      });
  }, []);
  const [selection, setSelection] = useState("Danh mục");
  const handleAll = () => {
    setDisplayStock(posts);
    setSelection("Tất cả");
  };
  const handleDecor = () => {
    setDisplayStock(posts.filter((item) => item.tag === "Đồ trang trí"));
    setSelection("Đồ trang trí");
  };
  const handleVP = () => {
    setDisplayStock(posts.filter((item) => item.tag === "Văn phòng phẩm"));
    setSelection("Văn phòng phẩm");
  };
  const handleToy = () => {
    setDisplayStock(posts.filter((item) => item.tag === "Đồ chơi"));
    setSelection("Đồ chơi");
  };
  const handleEquitment = () => {
    setDisplayStock(posts.filter((item) => item.tag === "Thiết bị"));
    setSelection("Thiết bị");
  };
  const handleEvent = () => {
    setDisplayStock(posts.filter((item) => item.tag === "Sự kiện"));
    setSelection("Sự kiện");
  };

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
              <button className={cx("btn-select", "btn")}>{selection}</button>
              <img
                className={cx("btn-add-icon")}
                src="/assets/imgs/chevron-down-solid.svg"
                alt="not found"
              />
            </div>
            <ul className={cx("list-option")}>
              <li className={cx("option-item")} onClick={handleAll}>
                Tất cả
              </li>
              <li className={cx("option-item")} onClick={handleDecor}>
                Đồ trang trí
              </li>
              <li className={cx("option-item")} onClick={handleVP}>
                Văn phòng phẩm
              </li>
              <li className={cx("option-item")} onClick={handleToy}>
                Đồ chơi
              </li>
              <li className={cx("option-item")} onClick={handleEvent}>
                Sự kiện
              </li>
              <li className={cx("option-item")} onClick={handleEquitment}>
                Thiết bị
              </li>
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
        <div>
          {displayStock.length === 0 && (
            <div>
              <img
                src="/assets/imgs/not_found.png"
                alt="not found"
                className={cx("not-found-img")}
              />
              <div className={cx("not-found-msg")}>
                Hiện tại chưa có sản phẩm cho danh mục này 🥲🥲
              </div>
            </div>
          )}
        </div>
        <div className={cx("grid-card")}>
          {displayStock.map((item, index) => (
            <Card
              key={index}
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
