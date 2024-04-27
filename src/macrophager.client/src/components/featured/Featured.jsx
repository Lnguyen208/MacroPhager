
import './Featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = ({ type, data, desc, units, goal }) => {
    let calcPercentage = Math.ceil(data / goal * 100);
    return (
        <div className='Featured'>
            <div className='top'>
                <h1 className='title'>Today's {type} / Goal</h1>
  {/*          <MoreVertIcon fontSize='small'></MoreVertIcon>*/}
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <CircularProgressbar value={calcPercentage} text={calcPercentage + "%"} strokeWidth={5}></CircularProgressbar>
                </div>
                <p className='title'>{type}</p>
                <p className='amount'>{data}&nbsp;{units}</p>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}

export default Featured