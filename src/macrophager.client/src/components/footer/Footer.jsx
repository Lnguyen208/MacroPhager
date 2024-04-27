import './Footer.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

    return (
        <div className='Footer'>
            <div className='footerTitle'>
                <CopyrightIcon className='icon'></CopyrightIcon>
                2024 MacroPhager. All rights reserved.
            </div>
        </div>
    )
}

export default Footer