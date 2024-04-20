import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../placeholders/DataTableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DataTable = ({ type }) => {
    const [data, setData] = useState(userRows);
    // temporary.
    const buttonRoute = type == 'Daily Log' ? '/products/new' : '/users/new';
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }
    
    const actionColumn = [
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to='/users/usernamehere' style={{ textDecoration: 'none' }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        
                        <div className='deleteButton' onClick={() => { handleDelete(params.row.id) } }>Delete</div>
                    </div>
                )
            }
        }
    ];

    return (
        <div className='DataTable'>
            <div className='DataTableTitle'>
                My { type }
                <Link to={buttonRoute} style={{ textDecoration: 'none' }} className='link'>
                    Add New { type == 'Daily Log' ? 'Food Item' : 'User' }
                </Link>
            </div>
            <DataGrid
                className='datagridtable'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 50, 100]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable