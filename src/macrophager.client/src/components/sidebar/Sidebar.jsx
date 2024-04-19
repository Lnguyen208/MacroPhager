import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import {useContext} from 'react';

const Sidebar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);

    return (
        <div className='Sidebar'>
            <div className='top'>
                <Link to='/' style={{ textDecoration:'none' } }>
                    <span className='logo'>MacroPhager</span>
                </Link>
            </div>
            <hr/>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className='icon'></DashboardIcon>
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className='title'>LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className='icon'></PersonIcon>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{ textDecoration: 'none' }}>
                        <li>
                            <SupervisedUserCircleIcon className='icon'></SupervisedUserCircleIcon>
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <EventNoteIcon className='icon'></EventNoteIcon>
                        <span>Orders</span>
                    </li>

                    <li>
                        <ForumIcon className='icon'></ForumIcon>
                        <span>Delivery</span>
                    </li>

                    <p className='title'>USEFUL</p>
                    <li>
                        <span>Stats</span>
                    </li>
                    <li>
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <span>System Health</span>
                    </li>
                    <li>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className='icon'></SettingsIcon>
                        <span>Setting</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountBoxIcon className='icon'></AccountBoxIcon>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon'></LogoutIcon>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption' onClick={() => dispatch({type:'LIGHT'}) }></div>
                <div className='colorOption' onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
        </div>
    )
}

export default Sidebar