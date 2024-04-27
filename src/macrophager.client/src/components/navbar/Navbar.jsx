import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const imagetype = localStorage.getItem('img_type');
    const imgdata = localStorage.getItem('profile_picture');
    const imgSrc = 'data:'.concat(imagetype).concat(';base64,').concat(imgdata);
    const username = localStorage.getItem('username');
    return (
        <div className='Navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...'></input>
                    <SearchIcon></SearchIcon>
                </div>
                <div className='items'>
                    <div className='item'>
                        <DarkModeIcon className='icon' onClick={() => dispatch({ type: 'TOGGLE' })}></DarkModeIcon>
                    </div>
                    <div className='item'>
                        <NotificationsIcon className='icon'></NotificationsIcon>
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineIcon className='icon'></ChatBubbleOutlineIcon>
                        <div className='counter'>2</div>
                    </div>
                    <Link to={'/users/' + username} state={{ username: username }} style={{ textDecoration: 'none' }}>
                        <div className='item'>
                            <img src={imgSrc} alt='' className='avatar'></img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar