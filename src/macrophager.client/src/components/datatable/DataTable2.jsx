import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { foodColumns, userColumns } from '../../placeholders/DataTableSource';
import './DataTable.scss';
import CircularProgress from '@mui/material/CircularProgress';

const DataTable = ({ type, data }) => {
    const [incomingData, setIncomingData] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setIncomingData(data);

    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (id) => {
        setIncomingData(incomingData.filter(item => item.id !== id));
    }

    const actionColumn = [
        {
            field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <Link to='/users/friendsUsername' style={{ textDecoration: 'none' }}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton' onClick={() => { handleDelete(params.row.id) }}>Delete</div>
                    </div>
                )
            }
        }
    ];

    return (
        incomingData == null ? (
            <CircularProgress></CircularProgress>
        ) : (
            <div className='DataTable'>
                <div className='DataTableTitle'>
                    My {type}
                    {type == 'Daily Log' ? (
                        <Link to='/foodlog/new' style={{ textDecoration: 'none' }} className='link'>
                            Make New Food Item or Meal
                        </Link>
                    ) : (
                        <div className='newFriendButton' onClick={handleClickOpen}>Add New Friend</div>
                    )}
                </div>
                <DataGrid
                    className='datagridtable'
                    rows={incomingData}
                    columns={type == 'Friends' ? userColumns.concat(actionColumn) : foodColumns.concat(actionColumn)}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 50, 100]}
                    checkboxSelection
                />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            const email = formJson.email;
                            console.log(email);
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Add a New Friend</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your friend's username below.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ marginBottom: '10px' }} onClick={handleClose} variant='outlined' size='medium'>Cancel</Button>
                        <Button style={{ marginBottom: '10px', marginRight: '10px' }} type="submit" variant='contained' size='medium'>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>)
    );
}

export default DataTable