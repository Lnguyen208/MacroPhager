
import './Timeline.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CircularProgress from '@mui/material/CircularProgress';
import http from '../../http-common.js';

const Timeline = () => {
    return(
        <div className = 'Timeline' >
            <Sidebar></Sidebar> 
            <div className='timelineContainer'>
                <Navbar></Navbar>
                <VerticalTimeline lineColor={'#444444'} layout={ '1-column-left' }>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        date="24/04/2024"
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        date="24/04/2024"
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="24/04/2024"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="24/04/2024"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="24/04/2024"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="24/04/2024"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="24/04/2024"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        icon={<img className='friendImg' src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">Title</h3>
                        <h4 className="vertical-timeline-element-subtitle">Username</h4>
                        <p>
                            Description HERE
                        </p>
                        <CircularProgress></CircularProgress>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: '#7451f8', color: '#fff' }}
                        icon={<div onClick={(e) => { console.log('clicked'); document.documentElement.scrollTop = 0; }} style={{ cursor: 'pointer', height:'100%', width:'100%' }}>
                            <ArrowUpwardIcon></ArrowUpwardIcon>
                            </div>}
                    />
                </VerticalTimeline>
            </div>
        </div >
    )
}

export default Timeline
