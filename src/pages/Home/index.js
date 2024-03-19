import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homeWrapper')}>
      <img className={cx('image')} alt='' src='https://th.bing.com/th/id/R.7f6e8dcf36848ca41f6835b55e696765?rik=yVhTKS6%2b%2bOe7KQ&pid=ImgRaw&r=0'></img>
      <div className={cx('homeContent')}>
        <div className={cx('webName')}>
          <h1>WEBSITE</h1>
          <h1>QUẢN LÝ VẬT DỤNG</h1>
          <h1>ĐOÀN - HỘI</h1>
          <p className={cx('italic')}>"Uy tín tạo niềm tin"</p>
        </div>
        <div className={cx('characters')}>
          <div className={cx('character')}>UY TÍN</div>
          <div className={cx('character')}>NHANH GỌN</div>
          <div className={cx('character')}>DỄ DÀNG</div>
          <div className={cx('character')}>TIỆN LỢI</div>
        </div>

      </div>
    </div>
  );
}

export default Home;
