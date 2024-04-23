
import './Widget.scss';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Widget = ({ type }) => {

    let data;
    // temporary
    const amt = 100;
    const diff = 20;

    switch (type) {
        case 'friend':
            data = {
                title: 'FRIEND POST',
                isMoney: false,
                link: 'See Details',
                icon: <PersonIcon className='icon' style={{ color: "#7451f8", backgroundColor: "transparent"} }></PersonIcon>
            };
            break;

        case 'order':
            data = {
                title: 'NO NEW POSTS',
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
                <span className='counter'>{data.isMoney && '$'} {"I binged ate at Kura ;c Guys Help OMG OMGOMG HOW d"}</span>
            <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                {/*<div className='percentage positive'>*/}
                {/*    {diff}&nbsp;&nbsp;<ThumbUpIcon></ThumbUpIcon>*/}
                {/*</div>*/}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget