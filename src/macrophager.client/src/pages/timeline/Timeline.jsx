
import './Timeline.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Timeline = () => {
    return(
        <div className = 'Timeline' >
            <Sidebar></Sidebar>
            <div className='timelineContainer'>
                <Navbar></Navbar>
            </div>
        </div >
    )
}

export default Timeline
