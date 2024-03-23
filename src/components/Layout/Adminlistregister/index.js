import React, { useEffect, useState } from 'react'
import styles from './Adminlistregister.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
var getkey = 0
var getstatus = 0;

function Adminlistdata(boolean) {
    const [posts, setPosts] = useState([]);
    var postApi = "assets/databases/listdata.json";
    useEffect(() => {
        fetch(postApi)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    if (!boolean.boolean) {
        return (
            <div>
                {posts.map((post, index) => {
                    getkey = index % 2;
                    if (post.status == 'Đã trả') getstatus = 1;
                    else getstatus = 0;
                    return (
                        <div key={post.id} className={cx('row', `row${getkey}`)}>
                            <div className={cx('col-md-1', 'listHeader')}>{index + 1}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.name}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.id}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.email}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.timein}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.timeout}</div>
                            <div className={cx('col-md-1', 'listHeader', `status${getstatus}`)}>{post.status}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div>
                {posts.map((post, index) => {
                    getkey = index % 2;
                    if (post.status == 'Đã trả') getstatus = 1;
                    else getstatus = 0;
                    return (
                        <div key={post.id} className={cx('row', `row${getkey}`)}>
                            <div className={cx('col-md-2', 'listHeader')}>{post.name}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.id}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.email}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.timein}</div>
                            <div className={cx('col-md-2', 'listHeader')}>{post.timeout}</div>
                            <div className={cx('col-md-1', 'listHeader', `status${getstatus}`)}>{post.status}</div>
                            <div className={cx('col-md-1', 'listHeader')}>
                                <button>Change</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Adminlistdata
