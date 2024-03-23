import styles from './Adminlistregister.module.scss'
import classNames from 'classnames/bind'
import Adminlistdata from '~/components/Layout/Adminlistregister/index.js'

import {useEffect, useState} from 'react'

const cx = classNames.bind(styles)

function Adminlistregister() {
    const [bool, setBool] = useState(false)

    useEffect(() => {
        
    },bool)

    var handleEdit = () => {
        setBool(true)
    }

    var handleDone = () => {
        setBool(false)
    }


    if(!bool){
        return (
            <div className={cx('listRegister')}>
                <div className={cx("contentWrapper")}>
                    <h1>Danh sách đăng ký</h1>
                    <p>
                        Trang chủ
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        Danh sách đăng ký
                    </p>
                    <div className={cx('aboveList')}>
                        <p>Danh sách đăng ký</p>
                        <div className={cx('edit')}>
                           <p onClick={handleEdit}>Chỉnh sửa</p> 
                           <p 
                           className={cx('done')}
                           style={{pointerEvents:"none"}}
                           onClick={handleDone}
                           >Xong</p> 
                        </div>
                        
                    </div>
                    <div className={cx('toFlex')}>
                        <div className={cx('listWrapper')}>
                            
                            <div className={cx('list')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-1','listHeader')}>STT</div>
                                    <div className={cx('col-md-2','listHeader')}>Họ và tên</div>
                                    <div className={cx('col-md-2','listHeader')}>Mã mượn</div>
                                    <div className={cx('col-md-2','listHeader')}>Email</div>
                                    <div className={cx('col-md-2','listHeader')}>Thời gian mượn</div>
                                    <div className={cx('col-md-2','listHeader')}>Hết hạn</div>
                                    <div className={cx('col-md-1','listHeader')}>Trạng thái</div>
                                </div>
                                 <Adminlistdata boolean={false}/>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }
    else{
        return (
            <div className={cx('listRegister')}>
                <div className={cx("contentWrapper")}>
                    <h1>Danh sách đăng ký</h1>
                    <p>
                        Trang chủ
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        Danh sách đăng ký
                    </p>
                    <div className={cx('aboveList')}>
                        <p>Danh sách đăng ký</p>
                        <div className={cx('edit')}>
                           <p 
                           onClick={handleEdit}
                           style={{pointerEvents:"none"}}
                           >Chỉnh sửa</p> 
                           <p 
                           className={cx('done')}
                           onClick={handleDone}
                           >Xong</p> 
                        </div>
                        
                    </div>
                    <div className={cx('toFlex')}>
                        <div className={cx('listWrapper')}>
                            
                            <div className={cx('list')}>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-2','listHeader')}>Họ và tên</div>
                                    <div className={cx('col-md-2','listHeader')}>Mã mượn</div>
                                    <div className={cx('col-md-2','listHeader')}>Email</div>
                                    <div className={cx('col-md-2','listHeader')}>Thời gian mượn</div>
                                    <div className={cx('col-md-2','listHeader')}>Hết hạn</div>
                                    <div className={cx('col-md-1','listHeader')}>Trạng thái</div>
                                    <div className={cx('col-md-1','listHeader')}>Điều chỉnh</div>
                                </div>
                                <Adminlistdata boolean={true}/>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }
    
}

export default Adminlistregister