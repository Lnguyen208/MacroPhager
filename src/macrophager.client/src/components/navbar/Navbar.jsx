import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='Search...'></input>
                    <SearchIcon></SearchIcon>
                </div>
                <div className='items'>
                    <div className='item'>
                        <LanguageIcon className='icon'></LanguageIcon>
                        English
                    </div>
                    <div className='item'>
                        <DarkModeIcon className='icon'></DarkModeIcon>
                    </div>
                    <div className='item'>
                        <FullscreenExitIcon className='icon'></FullscreenExitIcon>
                    </div>
                    <div className='item'>
                        <NotificationsIcon className='icon'></NotificationsIcon>
                        <div className='counter'>1</div>
                    </div>
                    <div className='item'>
                        <ChatBubbleOutlineIcon className='icon'></ChatBubbleOutlineIcon>
                        <div className='counter'>2</div>
                    </div>
                    <div className='item'>
                        <ChecklistIcon className='icon'></ChecklistIcon>
                    </div>
                    <div className='item'>
                        <img src='https://pets-society.com/wp-content/uploads/2023/02/orange-tabby-cat-ginger-847x1024.jpg' alt='' className='avatar'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar