
import './Widget.scss';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Link } from 'react-router-dom';

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
                link: 'Friend Username',
                icon: <PersonIcon className='icon' style={{ color: "#5F42CC", backgroundColor: "transparent" }}></PersonIcon>,
                message: 'I binged ate at Kura ;c Guys Help OMG OMGOMG HOW d"'
            };
            break;

        case 'order':
            data = {
                title: 'NO NEW POSTS',
                isMoney: false,
                link: 'Explore Public Posts',
                icon: <ExploreOutlinedIcon className='icon' style={{ backgroundColor: "transparent", color: "#444444" }}></ExploreOutlinedIcon>,
                message: '...',
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
                <span className={type == 'friend' ? 'title friend' : 'title explore'}>{data.title}</span>
                 <Link className='description' to={type == 'friend' ? 'users/timeline/post_id' : 'users/timeline'} style={{ textDecoration: 'none' }}>
                      <span className='counter'>{data.message}</span>
                 </Link>
                <Link to={type == 'friend' ? '/users/frienduser' : '/users'} style={{ textDecoration: 'none' }}>
                    <span className={type == 'friend' ? 'link friend' : 'link explore'}>{data.link}</span>
                </Link>
                
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