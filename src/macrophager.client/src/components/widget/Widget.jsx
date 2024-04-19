
import './Widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Widget = ({ type }) => {

    let data;
    // temporary
    const amt = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(255,0,0,0.2)"} }></PersonIcon>
            };
            break;

        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <Inventory2Icon className='icon' style={{ backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod" }}></Inventory2Icon>
            };
            break;

        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <AttachMoneyIcon className='icon' style={{ backgroundColor: "rgba(0,128,0,0.2)", color: "green" }}></AttachMoneyIcon>
            };
            break;

        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AttachMoneyIcon className='icon' style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "purple" }}></AttachMoneyIcon>
            };
            break;
        default:
            break;
    }

    return (
        <div className='Widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && '$'} {amt}</span>
            <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <ArrowDropUpIcon></ArrowDropUpIcon>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget