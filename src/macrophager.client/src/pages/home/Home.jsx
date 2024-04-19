import './Home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import TheTable from '../../components/table/TheTable';

const Home = () => {
    return (
        <div className='Home'>
            <Sidebar></Sidebar>
            <div className='homeContainer'>
                <Navbar></Navbar>
                <div className='widgets'>
                    <Widget type='user'></Widget>
                    <Widget type='order'></Widget>
                    <Widget type='earnings'></Widget>
                    <Widget type='balance'></Widget>
                </div>
                <div className='charts'>
                    <Featured></Featured>
                    <Chart aspect={2/1} title="Last 6 Months (Revenue)"></Chart>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>
                        Latest Transactions
                        <TheTable></TheTable>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home