
import Sidebar from '../../components/sidebar/Sidebar';
import './Single.scss';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import http from '../../http-common.js';

const Single = () => {
    const location = useLocation();
    const { username } = location.state;
    const [placeholder, setplaceholder] = useState(null);
    const [imagetype, setimagetype] = useState(null);
    const [imagedata, setimagedata] = useState([]);
        // Friend's profile. need to query
        useEffect(() => {
            http.post('/Account/userprofile', { username: username }).then((response) => {
                console.log(response);

                setimagetype(response.data.img_type);
                setimagedata(response.data.profile_picture);
                setplaceholder({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    macros: { fat: response.data.macro_fat, carbs: response.data.macro_carb, protein: response.data.macro_protein },
                    tdee: parseFloat(response.data.tdee)
                });

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

    return (
            <div className='Single'>
                <Sidebar></Sidebar>
                <div className='singleContainer'>
                <Navbar></Navbar>
                    <div className='top'>
                        <div className='left'>
                            <div className='editButton'>Edit</div>
                            <h1 className='title'>User Information</h1>
                            <div className='item'>
                            <img src={`data:${imagetype};base64,${imagedata}`} alt='' className='itemImage'></img>
                            {placeholder == null ? <CircularProgress size='10rem' color='inherit' thickness={2}></CircularProgress> :
                                (<div className='details'>
                                    <h1 className='itemTitle'>{placeholder.first_name + ' ' + placeholder.last_name}</h1>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Email: </span>
                                        <span className='itemValue'>{placeholder.email}</span>
                                    </div>
                                    <h3 className='itemTitle' style={{ textDecoration: 'underline', marginTop: '20px' }}>Nutrition Goals</h3>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Fats: </span>
                                        <span className='itemValue'>{placeholder.macros.fat}&nbsp;%</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Carbohydrates: </span>
                                        <span className='itemValue'>{placeholder.macros.carbs}&nbsp;%</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Proteins: </span>
                                        <span className='itemValue'>{placeholder.macros.protein}&nbsp;%</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>TDEE: </span>
                                        <span className='itemValue'>{placeholder.tdee}&nbsp;Calories</span>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                        <div className='right'>
                            <Chart aspect={4 / 1} title="Synopsis of Last 7 Days"></Chart>
                        </div>
                    </div>
                    <div className='bottom'>
                        <h1 className='title'>My Top 5 Food Items (Last 7 Days)</h1>
                        <TheTable></TheTable>
                    </div>
                </div> 
            </div>
        
    )
}

export default Single