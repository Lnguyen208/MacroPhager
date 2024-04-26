import './Home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';
import {nutritionFeatured} from '../../placeholders/FeaturedSource.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PiChart from '../../components/pichart/PiChart';
import { useState, useEffect } from 'react';
import http from '../../http-common.js';

const Home = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    
    // Pass in the entire response POST object.
    const [fourposts, setfourposts] = useState([]);

    useEffect(() => {
        http.post('/Post/getrecent', { username: localStorage.getItem('username') }, {
            signal: AbortSignal.timeout(10000),
        }).then((response) => {
            //console.log(response); // expected: list with at most four posts.
            
            var postObjects = response.data;
            //console.log(postObjects);
            //console.log(length);

            setfourposts(postObjects);

        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }, []);



    return (
        <div className='Home'>
            <Sidebar></Sidebar>
            <div className='homeContainer'>
                <Navbar></Navbar><div className='widgets'>
                    
                    
                    </div>
                <div className='stats'>
                    <div className='carousel'>
                        <Carousel
                            className='items'
                            swipeable={false}
                            responsive={responsive}
                            draggable={false}
                            infinite={true}
                            showDots={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}                        >
                            {
                                nutritionFeatured.map((n) => {
                                    return (
                                        <Featured
                                            key={n.id}
                                            type={n.type}
                                            data={n.data}
                                            desc={n.desc}
                                            units={n.units}
                                            goal={n.goal}
                                        ></Featured>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                    <div className='charts'>
                        <Chart aspect={3 / 1} title="Last 7 Days (Calories)"></Chart>
                    </div>
                    <div className='macrodistr'>
                        <PiChart title={ "Today's Macro Distribution" }></PiChart>
                    </div>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>
                        Last 5 Food Items Logged
                    </div>
                    <TheTable></TheTable>
                </div>
            </div>
        </div>
    );
}

export default Home