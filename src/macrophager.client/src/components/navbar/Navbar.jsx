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
                    <Link to='/users/12345' style={{ textDecoration: 'none' }}>
                        <div className='item'>
                            <img src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt='' className='avatar'></img>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar