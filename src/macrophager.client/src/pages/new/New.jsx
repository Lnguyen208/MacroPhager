
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react'; 
import http from '../../http-common.js';
import defaultProfileImg from '../../assets/default-pfp.jpg'
import defaultFoodItemImg from '../../assets/default-food-item.jpg';

const New = ({ inputs, title, itemType }) => {

    const [file, setFile] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        /*        console.log(e.target[0].files[0]);*/

        let payloadImg = e.target[0].files[0];
        if (payloadImg === undefined) { alert('Profile picture required') }
        else {
            let inputList = [];
            for (let i = 1; i < e.target.length - 1; i++) {
                inputList.push(e.target[i].value);
            }
            try {
                if (itemType == 'user') {
                    let formData = new FormData();
                    formData.append('imageFile', payloadImg);
                    formData.append('info', inputList);

                    //for (const pair of formData.entries()) {
                    //    console.log(pair[0], pair[1]);
                    //}
                    http.post('/User/register', formData, {
                        signal: AbortSignal.timeout(100000),
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }).then((response) => { console.log(response); }).catch(function (error) {
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
                }
                else {
                    // end point specific for food items
                }
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        }
    }


    return (
        <div className='New'>
            <Sidebar></Sidebar>
            <div className='newContainer'>
                <NavBar></NavBar>
                <div className='top'>
                    <h1 className='title'>{title}</h1>
                </div>
                <div className='bottom'>
                    {itemType == 'user' ? <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : defaultProfileImg} alt=''></img>
                    </div> : <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : defaultFoodItemImg} alt=''></img>
                    </div> }
                    <div className='right'>
                        <form onSubmit={handleFormSubmit}>
                            {itemType == 'user' ?
                            <div className='formInput'>
                                <label htmlFor='file'>
                                    Upload Image (256kB Max): <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon>
                                </label>
                                <input type='file' id='file' accept='image/png, image/jpeg' onChange={e => e.target.files[0].size > 256000 ? null : setFile(e.target.files[0])} style={ { display:'none' } }></input>
                            </div> : null }
                            { inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} required></input>
                                </div>
                            ))}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <input className='usersubmit' type='submit'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New