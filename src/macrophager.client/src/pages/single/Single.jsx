
import Sidebar from '../../components/sidebar/Sidebar';
import './Single.scss';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';

const Single = () => {
    return (
        <div className='Single'>
            <Sidebar></Sidebar>
            <div className='singleContainer'>
                <Navbar></Navbar>
                <div className='top'>
                    <div className='left'>
                    <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                        <div className='item'>
                            <img src='https://c8.alamy.com/comp/2AY7D9H/a-domestic-medium-haired-cat-with-brown-tabby-markings-and-green-eyes-2AY7D9H.jpg' alt='' className='itemImage'></img>
                            <div className='details'>
                                <h1 className='itemTitle'>Pallas Poop</h1>
                                <div className='detailItem'>
                                    <span className='itemKey'>Email: </span>
                                    <span className='itemValue'>PallasPoop@gmail.com</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Phone: </span>
                                    <span className='itemValue'>+1 777-888-9999</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Address: </span>
                                    <span className='itemValue'>123 Home Drive Atlanta, GA</span>
                                </div>
                                <div className='detailItem'>
                                    <span className='itemKey'>Country: </span>
                                    <span className='itemValue'>USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <Chart aspect={3/1} title="User Spending (Last 6 Months)"></Chart>
                    </div>
                </div>
                <div className='bottom'>
                    <h1 className='title'>Last Transactions</h1>
                    <TheTable></TheTable>
                </div>
            </div>
        </div>
    )
}

export default Single