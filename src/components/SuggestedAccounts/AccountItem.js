import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-6/308508195_1307977749939453_8245842882128580263_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BP5lquV4hmwAX8Zx1I3&_nc_oc=AQnZ9-FiLI7k80nhHSwhs3IZkQ1LenBRYTdBT4zM_eeXsvTqIHXzvWhtAsbizEXlmiE&_nc_ht=scontent-nrt1-2.xx&oh=00_AfAcDbFIsMm70kXqNBhxtqn-lbAaOL1gqUY3gfZCUy4QKw&oe=64C5BD1D"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenhao</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyen Quang Hao</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
