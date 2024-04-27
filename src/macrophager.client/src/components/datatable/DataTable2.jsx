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
import { foodColumns, foodRows } from '../../placeholders/DataTableSource';
import './DataTable2.scss';
import CircularProgress from '@mui/material/CircularProgress';
import http from '../../http-common.js';
import PiChart from '../pichart/PiChart';

const DataTable = () => {
    const [incomingData, setIncomingData] = useState(null);
    const [open, setOpen] = useState(false);
    let todaysdate = new Date();
    let inputDate = { date: todaysdate.getDate()+'-'+(todaysdate.getMonth()+1)+'-'+todaysdate.getFullYear()}
    /*    console.log(inputDate);*/

    useEffect(() => {
        // fetch should return serving and serving SIZE with OG Data. Need a function to calculate adjusted macronutrient values
        http.post('/dailylog/getdailylog', { username: localStorage.getItem('username') }, {
                signal: AbortSignal.timeout(10000),
            }).then((response) => {
                console.log(response);
                setIncomingData(response.data);
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        //setIncomingData(foodRows);

    }, []);

    function something(inputVal) {
        // use this to recalculate values in pre established divs
        let item = document.getElementById('testing');
        item.innerText = inputVal;
        console.log(inputVal);
    }

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
            field: 'action', headerName: 'Action', minWidth: 150, flex: 1, renderCell: (params) => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton' onClick={ handleClickOpen }>Edit</div>
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
                        My Daily Log
                        <div className='buttonarea'>
                            <div className='logfoodbutton'>Log a Food Item</div>
                            <Link to='/foodlog/new' style={{ textDecoration: 'none' }} className='link'>
                                Make a New Food Item
                            </Link>
                        </div>
                </div>
                <DataGrid
                    className='datagridtable'
                    rows={incomingData}
                    columns={foodColumns.concat(actionColumn)}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 25, 50]}
                    checkboxSelection
                    />
                    <div className='bottom'>
                        <div className='stats'>
                            <div className='statsTitle'>Total Macronutrients</div>
                            <div className='macrodistr'>
                                <div className='calories'>Calories: </div>
                                <span>0</span>
                                <div className='fats'>Fats: </div>
                                <span>0</span>
                                <div className='carbs'>Carbs: </div>
                                <span>0</span>
                                <div className='proteins'>Proteins:</div>
                                <span>0</span>
                            </div>
                        </div>

   
                    </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries(formData.entries());
                            console.log(formJson);
                            const email = formJson.new_serving;
                            console.log(email);
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Edit Food Entry</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Edit Food Entry
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="new_serving"
                            label="New Consumed Serving (grams)"
                            type="decimal"
                            fullWidth
                            variant="standard"
                            InputProps={{ inputProps: { min: 0, max: 10000 } }}
                            onChange={(e) => {
                                    something(e.target.value);
                             }}
                            />
                            <CircularProgress size='10rem' color='inherit' thickness={2}></CircularProgress>
                            <div id='testing'><p>Preview Adjust Nutrition Profile</p></div>
                            <div>Food Name</div>
                            <div>calories</div>
                            <div>fats</div>
                            <div>carbs</div>
                            <div>proteins</div>
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