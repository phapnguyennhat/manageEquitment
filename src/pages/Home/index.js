import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('homeWrapper')}>
      <img className={cx('image')} alt='' src='https://th.bing.com/th/id/R.7f6e8dcf36848ca41f6835b55e696765?rik=yVhTKS6%2b%2bOe7KQ&pid=ImgRaw&r=0'></img>
      <div className={cx('webName')}></div>
    </div>
  );
}

export default Home;
