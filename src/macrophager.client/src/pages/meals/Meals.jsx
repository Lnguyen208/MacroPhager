
import './Meals.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Meals = () => {
    return (
        <div className='Meals' >
            <Sidebar></Sidebar>
            <div className='mealsContainer'>
                <Navbar></Navbar>
            </div>
        </div >
    )
}

export default Meals
