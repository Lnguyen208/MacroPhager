
import './PostDialog.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import http from '../../http-common.js';

const PostDialog = ({ post_info }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='PostDialog'>
            <div className='title'>Friend's Post</div>
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
                <DialogTitle>Add a New Friend</DialogTitle>
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
        </div>
    )
}

export default PostDialog