
import Sidebar from '../../components/sidebar/Sidebar';
import './FoodRepo.scss';
import Navbar from '../../components/navbar/Navbar';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';

import { useLocation } from 'react-router-dom';
import { useState, useEffect, forwardRef } from 'react';
import http from '../../http-common.js';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'foodname', headerName: 'Food Name', width: 130 },
    {
        field: 'serving',
        headerName: 'Serving',
        type: 'decimal',
        width: 90,
    },
    {
        field: 'calories',
        headerName: 'Calories',
        type: 'decimal',
        width: 90,
    },
    {
        field: 'fats',
        headerName: 'Fats',
        type: 'decimal',
        width: 90,
    },
    {
        field: 'protein',
        headerName: 'Proteins',
        type: 'decimal',
        width: 90,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const FoodRepo = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [incomingData, setIncomingData] = useState([]);
    useEffect(() => {
        http.post('Food/myfoodrepo', { username: localStorage.getItem('username') }).then((response) => { setIncomingData(response.data); })

    }, []);

    return (
        <div className='FoodRepo'>
            <Sidebar></Sidebar>
            <div className='foodRepoContainer'>
                <Navbar></Navbar>
                <div className='title' style={{ margin: '20px 0px 0px 20px', fontWeight: 'bold', fontSize:'20px'} }>My Food Repo</div>
                <div className='top'>
                    
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={incomingData}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 25 },
                                },
                            }}
                            pageSizeOptions={[25, 50, 100]}
                            checkboxSelection
                        />
                    </div>
                    
                </div>
                <div className='bottom' onClick={handleClickOpen}>
                    <div className='title white' style={{ fontWeight: 'bold', fontSize: '20px' }}>Search Food Central DB</div>
                </div>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative', bgcolor:'#7451f8' }}>
                        <Toolbar>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="food_query"
                                label="Food Query"
                                type="food_query"
                                
                                variant="standard"
                                style={{ position: 'absolute', left: '20px', top: '40px' }}></TextField>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Searching Food Data Central
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                Add Item to My Food Repository
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div style={{ display: 'grid', backgroundColor: 'lavender', height: '100%', width: '100%' }}>

                    </div>
                </Dialog>
            </div>
        </div>

    )
}

export default FoodRepo