
import './Featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = () => {
    return (
        <div className='Featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'></MoreVertIcon>
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={70} text={'70%'} strokeWidth={ 5 }></CircularProgressbar>
                </div>
                <p className='title'>Total sales made</p>
                <p className='amount'>$420</p>
                <p className='desc'>Previous transactions processing. Last payments may not be included.</p>
                <div className='summary'>
                    <div className='item'>
                        <div className='itemTitle'>Target</div>
                        <div className='itemResult negative'>
                        <ArrowDropDownIcon fontSize='small'></ArrowDropDownIcon>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Week</div>
                        <div className='itemResult positive'>
                            <ArrowDropUpIcon fontSize='small'></ArrowDropUpIcon>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='itemTitle'>Last Month</div>
                        <div className='itemResult positive'>
                            <ArrowDropUpIcon fontSize='small'></ArrowDropUpIcon>
                            <div className='resultAmount'>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured