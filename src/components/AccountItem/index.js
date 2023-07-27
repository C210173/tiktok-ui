import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://dp16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/829250894f9da59dbf31034fcf04e6b4.jpeg?x-expires=1690444800&x-signature=iavfhDPQPfFX8XeK48bVX%2F%2FxGxI%3D"
                alt="hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguuyen van a</span>
            </div>
        </div>
    );
}

export default AccountItem;
