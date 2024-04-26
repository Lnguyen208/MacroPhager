
import './New.scss';
import PublicNavbar from '../../components/navbar/PublicNavbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react'; 
import http from '../../http-common.js';
import defaultProfileImg from '../../assets/default-pfp.jpg'
import { userInputs } from '../../placeholders/FormSource';

const New = () => {
    const inputs = userInputs;
    const title = 'New User Registration'
    const [file, setFile] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
/*      console.log(e.target[0].files[0].type);*/

        let payloadImg = e.target[0].files[0];
        if (payloadImg === undefined) { alert('Profile picture required') }
        else {
            try {
                    let formData = new FormData();
                    formData.append('username', e.target[1].value);
                    formData.append('first_name', e.target[2].value);
                    formData.append('last_name', e.target[3].value);
                    formData.append('email', e.target[4].value);
                    formData.append('password', e.target[5].value);
                    formData.append('macro_goals', e.target[6].value.concat(e.target[7].value).concat(e.target[8].value));
                    formData.append('tdee', e.target[9].value);
                    formData.append('img_type', e.target[0].files[0].type)
                    formData.append('imageFile', payloadImg);
                    for (const pair of formData.entries()) {
                        console.log(pair[0], pair[1]);
                    }
                http.post('/Account/register', formData, {
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
            catch (err) {
                console.log(err);
                throw err;
            }
        }
    }


    return (
        <div className='New'>
            <div className='newContainer'>
                <PublicNavbar></PublicNavbar>
                <div className='top'>
                    <h1 className='title'>{title}</h1>
                </div>
                <div className='registrationcontent'>
                    <div className='bottom'>
                        <div className='left'>
                            <img src={file ? URL.createObjectURL(file) : defaultProfileImg} alt=''></img>
                        </div>
                        <div className='right'>
                            <form onSubmit={handleFormSubmit}>

                                <div className='formInput'>
                                    <label htmlFor='file'>
                                        Upload Image (256kB Max): <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon>
                                    </label>
                                    <input type='file' id='file' accept='image/png, image/jpeg' onChange={e => e.target.files[0]?.size > 256000 ? alert('file too large') : setFile(e.target.files[0])} style={{ display: 'none' }}></input>
                                </div>
                                {inputs.map((input) => (
                                    <div className='formInput' key={input.id}>
                                        <label>{input.label}</label>
                                        <input id={input.id} type={input.type} placeholder={input.placeholder} pattern={input.pattern} required></input>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <input className='usersubmit' type='submit' value='Register'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default New