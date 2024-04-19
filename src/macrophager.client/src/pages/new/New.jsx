
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react'; 

const New = ({ inputs, title }) => {

    const [file, setFile] = useState('');

    return (
        <div className='New'>
            <Sidebar></Sidebar>
            <div className='newContainer'>
                <NavBar></NavBar>
                <div className='top'>
                    <h1 className='title'>{title}</h1>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <img src={file ? URL.createObjectURL(file) : 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg'}  alt=''></img>
                    </div>
                    <div className='right'>
                        <form>
                            <div className='formInput'>
                                <label htmlFor='file'>
                                    Upload Image: <DriveFolderUploadIcon className='icon'></DriveFolderUploadIcon>
                                </label>
                                <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={ { display:'none' } }></input>
                            </div>
                            { inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder }></input>
                                </div>
                            ))}
                        </form>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'} }>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New