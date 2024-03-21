import styles from './Signin.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Signin() {
    return (
        <div className={cx('signWrapper')}>
            <div className={cx('signIn')}>
                <div className={cx('signIn_left')}>
                    <img alt='' src='https://brownandcaldwell.com/wp-content/uploads/2022/09/NEA-Template_1080x1080-cover-e1663009946143.png'></img>
                </div>
                <div className={cx('signIn_right')}>
                    <div className={cx('signIn_right_content')}>
                        <Link to='/'>
                            <i className={cx('fa fa-close', 'signIn_close')} aria-hidden='true'></i>
                        </Link>
                        <h3>ĐĂNG NHẬP</h3>
                        <div className={cx('emailInput')}>
                            <input type='text' placeholder='Email address'></input>
                        </div>
                        <div className={cx('passwordInput')}>
                            <input type='text' placeholder='Password'></input>
                        </div>
                        <div className={cx('signIn_right_button')}>
                            <button>Tiếp tục</button>
                            <button>Tiếp tục với tư cách quản trị viên</button>
                            <i className={cx("fa fa-angle-right", 'above')} aria-hidden="true"></i>
                            <i className={cx("fa fa-angle-right")} aria-hidden="true"></i>
                        </div>
                        <div className={cx('signUp_in_signIn')}>
                            <p>Hoặc chưa có tài khoản</p>
                        </div>
                        <Link to='/signup'>
                            <button>
                                Đăng ký
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin