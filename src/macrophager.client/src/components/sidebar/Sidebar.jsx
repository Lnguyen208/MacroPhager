import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ForumIcon from '@mui/icons-material/Forum';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className='top'>
                <span className='logo'>MacroPhager</span>
            </div>
            <hr/>
            <div className='center'>
                <ul>
                <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className='icon'></DashboardIcon>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <PersonIcon className='icon'></PersonIcon>
                        <span>Users</span>
                    </li>
                    <li>
                        <SupervisedUserCircleIcon className='icon'></SupervisedUserCircleIcon>
                        <span>Products</span>
                    </li>
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
                <div className='colorOption'></div>
                <div className='colorOption'></div>
            </div>
        </div>
    )
}

export default Sidebar