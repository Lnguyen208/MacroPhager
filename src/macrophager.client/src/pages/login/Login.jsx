
import './Login.scss';
import Footer from '../../components/footer/Footer';
import PublicNavbar from '../../components/navbar/PublicNavbar';
import http from '../../http-common.js';
import { Link } from 'react-router-dom';

const Login = () => {
    const title = 'Enter Your Login Credentials'


    const handleFormSubmit = (e) => {
        e.preventDefault();

            try {
                let credentials = {
                    username: e.target[0].value,
                    password: e.target[1].value,
                }
                console.log(credentials);

                http.post('/Account/login', credentials, {
                    signal: AbortSignal.timeout(100000),
                }).then((response) => {
                    console.log(response);
                    localStorage.setItem('username', response.data.username); // assume info sent back is username
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
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        }
    
    return (
        <div className='Login'>
                <div className='loginContainer'>
                <PublicNavbar></PublicNavbar>
                <div className='top'>
                    <h1 className='title'>{title}</h1>
                </div>
                    <div className='loginPage'>
                        <div className='bottom'>
                                <form onSubmit={handleFormSubmit}>
                                        <div className='formInput'>
                                            <label>Username</label>
                                                <input id={1} type='text' placeholder='' required></input>
                                <label style={{ marginTop: '10px' }} >Password</label>
                                <input id={2} type='password' placeholder='' required></input>
                                        </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <input className='usersubmit' type='submit' value='Login'></input>
                                    </div>
                        </form>
                        <Link to='/register' style={{ textDecoration: 'none' }}>
                            <div className='registerlink'>New user? Register a free account!</div>
                        </Link>
                        </div>
                    </div>
                 </div>
                <Footer></Footer>
        </div>
    )
}

export default Login