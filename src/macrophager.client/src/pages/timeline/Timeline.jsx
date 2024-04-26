
import './Timeline.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import http from '../../http-common.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {

    const [latestposts, setlatestposts] = useState([]);
    useEffect(() => {
        http.post('/Post/getbydate', { username: localStorage.getItem('username'), earliest: '', latest: ''},{
            signal: AbortSignal.timeout(10000),
        }).then((response) => {
            console.log(response);          
            setlatestposts(response.data);

        }).catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }, []);

    return(
        <div className = 'Timeline' >
            <Sidebar></Sidebar> 
            <div className='timelineContainer'>
                <Navbar></Navbar>
                <VerticalTimeline lineColor={'#444444'} layout={'1-column-left'}>
                {latestposts.map((item) => {
                    return (<VerticalTimelineElement
                        key={item.post_id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#E8E2FF', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #E8E2FF' }}
                        date={item.time_stamp.substring(0, 19)}
                        icon={<img className='friendImg' src={'data:'.concat(item.img_type).concat(';base64,').concat(item.poster_picture)} alt=''></img>}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <Link to={'/users/'+item.posted_by} state={{ username: item.posted_by }}>
                            <h4 className="vertical-timeline-element-subtitle" style={{ margin: '5px 0px -10px 0px', color: '#3d1fad' }}>{item.posted_by}</h4>
                        </Link>
                        
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>)
                })}
                    
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
