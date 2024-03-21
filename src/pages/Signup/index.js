import styles from './Signup.module.scss'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Signup() {
    return (
        <div className={cx('signWrapper')}>
            <div className={cx('signUp')}>
                <div className={cx('signUp_left')}>
                    <div className={cx('signUp_left_content')}>
                        <Link to='/'>
                            <i className={cx('fa fa-close', 'signUp_close')} aria-hidden='true'></i>
                        </Link>
                        <h3>ĐĂNG KÝ</h3>
                        <div className={cx('emailInput')}>
                            <input type='text' placeholder='Email address'></input>
                        </div>
                        <div className={cx('passwordInput')}>
                            <input type='text' placeholder='Password'></input>
                        </div>
                        <div className={cx('passwordInputValidation')}>
                            <input type='text' placeholder='Password Validation'></input>
                        </div>
                        <div className={cx('signUp_left_button')}>
                            <button>Xác nhận đăng ký</button>
                            <i>
                               <i className={cx("fa fa-angle-right")} aria-hidden="true"></i> 
                            </i>
                        </div>
                        <div className={cx('signIn_in_signUp')}>
                            <p>Hoặc đã có tài khoản</p>
                        </div>
                        <Link to='/signin'>
                        <button>Đăng nhập</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('signUp_right')}>
                    <img alt='' src='https://brownandcaldwell.com/wp-content/uploads/2022/09/NEA-Template_1080x1080-cover-e1663009946143.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Signup