import styles from './SignIn-Up.module.scss'

const cx = classNames.bind(styles);

function Sign() {
    <div className={cx('signWrapper')}>
        <div className={cx('signIn')}></div>
        <div className={cx('signUp')}></div>
    </div>
}

export default Sign