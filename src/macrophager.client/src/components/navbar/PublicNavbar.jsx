import './PublicNavbar.scss';

import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const PublicNavbar = () => {

    return (
        <div className='PublicNavbar'>
            <div className='wrapper'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'>
                        MacroPhager
                    </span>
                </Link>
                <div className='items'>
                    <div className='item'>
                        About Us
                    </div>
                    <div className='item'>
                        User Guide
                    </div>
                    <div className='item'>
                        Support Us
                    </div>
                    <div className='item'>
                        <Link to='/login' style={{ textDecoration: 'none' }}>
                            <div className='loginbutton'>Login</div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default PublicNavbar