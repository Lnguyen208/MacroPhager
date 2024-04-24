import DataTable from '../../components/datatable/DataTable';
import DataTable2 from '../../components/datatable/DataTable2';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './List.scss';
import {userRows} from '../../placeholders/DataTableSource';
import {foodRows} from '../../placeholders/DataTableSource';

const List = ({ type }) => {
    return (
        <div className='List'>
            <Sidebar></Sidebar>
            <div className='listContainer'>
                <Navbar></Navbar>
                {type == 'Daily Log' ? (<DataTable2 type={type} data={foodRows}></DataTable2>) : <DataTable type='Friends' data={userRows}></DataTable>}
            </div>
        </div>
    )
}

export default List