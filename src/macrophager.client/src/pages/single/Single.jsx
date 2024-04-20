
import Sidebar from '../../components/sidebar/Sidebar';
import './Single.scss';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';

const Single = () => {
    let placeholder = {
        first_name: 'Pallas',
        last_name: 'Poop',
        email: 'PallasPoop@gmail.com',
        macros: { fat: 30, carbs: 50, protein: 20 },
        tdee: 2000,
    }
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
                            <img src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt='' className='itemImage'></img>
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
                    <h1 className='title'>Today's Food Log</h1>
                    <TheTable></TheTable>
                </div>
            </div>
        </div>
    )
}

export default Single