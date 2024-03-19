import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className="home">
      <div className={cx("container-img")}>
        <div className="home1">
          <img
            className={cx("home__img")}
            alt=""
            src="https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide3image/1710760830/sanbong.jpeg"
          ></img>
        </div>
        <div className="home2">
          <img
            className={cx("home__img")}
            alt=""
            src="https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide1image/1710760830/slbk.jpg"
          ></img>
          <img
            className={cx("home__img")}
            alt=""
            src="https://th.bing.com/th/id/OIP.zLkWIO82DNql2E1FqhEiJwHaHT?rs=1&pid=ImgDetMain"
          ></img>
          <img
            className={cx("home__img")}
            alt=""
            src="https://lms.hcmut.edu.vn/pluginfile.php/3/theme_academi/slide2image/1710760830/slbktv.jpg"
          ></img>
        </div>
        <div className="home3">
          <img alt="" src="" className={cx("home__img")}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
