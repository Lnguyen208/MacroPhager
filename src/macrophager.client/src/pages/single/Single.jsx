
import Sidebar from '../../components/sidebar/Sidebar';
import './Single.scss';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';
import { useLocation } from 'react-router-dom';

const Single = () => {
    const location = useLocation();
    const { username } = location.state;

    console.log(username);

    const splitMacros = localStorage.getItem('macro_goal').split('%');
    let placeholder = {
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        email: localStorage.getItem('email'),
        macros: { fat: parseFloat(splitMacros[0]), carbs: parseFloat(splitMacros[1]), protein: parseFloat(splitMacros[2]) },
        tdee: parseFloat(localStorage.getItem('tdee')),
    }
    const imagetype = localStorage.getItem('img_type');
    const imgdata = localStorage.getItem('profile_picture');

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
                            <img src={`data:${imagetype};base64,${imgdata}`} alt='' className='itemImage'></img>
                            <div className='details'>
                                <h1 className='itemTitle'>{ placeholder.first_name + ' ' + placeholder.last_name }</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email: </span>
                                    <span className='itemValue'>{ placeholder.email }</span>
                                </div>
                                <h3 className='itemTitle' style={{ textDecoration: 'underline', marginTop: '20px'} }>Nutrition Goals</h3>
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
                            </div>
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