import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    alt=""
                    src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/308508195_1307977749939453_8245842882128580263_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BP5lquV4hmwAX8Zx1I3&_nc_oc=AQnZ9-FiLI7k80nhHSwhs3IZkQ1LenBRYTdBT4zM_eeXsvTqIHXzvWhtAsbizEXlmiE&_nc_ht=scontent-nrt1-2.xx&oh=00_AfAcDbFIsMm70kXqNBhxtqn-lbAaOL1gqUY3gfZCUy4QKw&oe=64C5BD1D"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenhao</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Quang Hao</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
