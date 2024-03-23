import styles from "./Signin.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

const cx = classNames.bind(styles)
var agree = false

function Signin() {
    const [accounts, setAccounts] = useState([])
const [email,setEmail] = useState('')
const [password, setPassword] = useState('')



    useEffect(() => {
        var postApi = "assets/databases/account.json";
      fetch(postApi)
        .then((response) => response.json())
        .then((accounts) => {
          setAccounts(accounts);
        });
    }, []);


    var handleClick = (type, email, password) => {
    for(var i of accounts){
        if(i.email == email){
            if(i.type == type && i.password == password) {agree = true;break;}
            else agree = false
        }
    }
}


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
                            <input 
                            type='text' 
                            placeholder='Email address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className={cx('passwordInput')}>
                            <input 
                            type='password' 
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className={cx('signIn_right_button')}>
                            <div
                            onClick={handleClick('user', email, password)} 
                            className={cx('continue')}>
                                <button>
                                    {agree ? 
                                    <Link to='/a'>Tiếp tục</Link> :
                                    'Tiếp tục'    
                                }
                                </button>
                                <i>
                                    <i className={cx("fa fa-angle-right", 'above')} aria-hidden="true"></i>
                                </i>
                                
                            </div>
                            <div onClick={handleClick('admin', email, password)} className={cx('continueAdmin')}>
                                <button>{
                                agree ? 
                                <Link to='/a'>Tiếp tục với tư cách quản trị viên</Link> :
                                'Tiếp tục với tư cách quản trị viên'    
                            }</button>
                                <i>
                                    <i className={cx("fa fa-angle-right")} aria-hidden="true"></i>
                                </i>
                            </div>
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

export default Signin;
