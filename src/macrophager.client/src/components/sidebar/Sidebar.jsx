import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DiningIcon from '@mui/icons-material/Dining';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import {useContext} from 'react';

const Sidebar = () => {
    const { darkMode, dispatch } = useContext(DarkModeContext);
    localStorage.setItem('username', 'pallaspoop2024');

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

                    <p className='title'>ACTIONS</p>
                    <Link to='/foodlog' style={{ textDecoration: 'none' }}>
                        <li>
                            <DiningIcon className='icon'></DiningIcon>
                            <span>Food Log</span>
                        </li>
                    </Link>
                    <Link to='/friends' style={{ textDecoration: 'none' }}>
                        <li>
                            <SupervisedUserCircleIcon className='icon'></SupervisedUserCircleIcon>
                            <span>My Friends</span>
                        </li>
                    </Link>
                    <Link to='/foodlog/meals' style={{ textDecoration: 'none' }}>
                        <li>
                            <AutoStoriesIcon className='icon'></AutoStoriesIcon>
                            <span>Saved Meals</span>
                        </li>
                    </Link>
                    <Link to='/users/timeline' style={{ textDecoration: 'none' }}>
                        <li>
                            <ForumIcon className='icon'></ForumIcon>
                            <span>Post Timeline</span>
                        </li>
                    </Link>

                    <p className='title'>USER</p>
                    <Link to={'/users/'+localStorage.getItem('username')} style={{ textDecoration: 'none' }}>
                        <li>
                            <AccountBoxIcon className='icon'></AccountBoxIcon>
                            <span>Profile</span>
                        </li>
                    </Link>
                    <li>
                        <SettingsIcon className='icon'></SettingsIcon>
                        <span>Setting</span>
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