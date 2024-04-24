
import './Posts.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Posts = () => {
    return (
        <div className='Posts' >
            <Sidebar></Sidebar>
            <div className='postsContainer'>
                <Navbar></Navbar>
            </div>
        </div >
    )
}

export default Posts
