
import './Widget.scss';
import PersonIcon from '@mui/icons-material/Person';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Widget = ({ type }) => {
    const [open, setOpen] = useState(false);
    const [like, setLike] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleLike = () => {
        setLike(!like);
    };

    let data;

    switch (type) {
        case 'friend': {
                data = {
                    title: 'FRIEND POST',
                    link: '/users/'+localStorage.getItem('username'), //this should changes
                    icon: <PersonIcon className='icon' style={{ color: "#5F42CC", backgroundColor: "transparent" }}></PersonIcon>,
                    message: {  } // this should change
                };
            }
        
            break;
        case 'none':
            data = {
                title: 'NO NEW POSTS',
                link: 'View My Timeline',
                icon: <ExploreOutlinedIcon className='icon' style={{ backgroundColor: "transparent", color: "#444444" }}></ExploreOutlinedIcon>,
                message: 'No More Posts Found',
            };
            break;
        default:
            break;
    }

    return (
        <div className='Widget'>
            <div className='left'>
                <span className={type == 'friend' ? 'title friend' : 'title explore'}>{data.title}</span>

                {type == 'friend' ? <span className='counter friend' onClick={handleClickOpen}>{data.message}</span> :
                    <span className='counter none'>{data.message}</span>}
                
                <Link to={type == 'friend' ? '/users/' + localStorage.getItem('username') : '/users/timeline'} state={ { username: localStorage.getItem('username') }} style={{ textDecoration: 'none' }}>
                    <span className={type == 'friend' ? 'link friend' : 'link explore'}>{data.link}</span>
                </Link>
                
            </div>
            <div className='right'>
                {data.icon}
            </div>
            {type == 'friend' ? <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ padding: '20px 0px 10px 0px', textAlign:'center'} }>Theres a bug</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ margin: '-2px 0px 10px 0px' }}>
                        <p style={{ textAlign: 'justify' }}>Theres a bug</p>
                    </DialogContentText>
                    <DialogContentText style={{ color: '#5F42CC' } }>
                        <p>{' -- ' + localStorage.getItem('username')}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ marginBottom: '10px' }} onClick={toggleLike} variant='outlined' size='medium'>
                        {like ? <FavoriteIcon style={{ fontSize: '25px' }}></FavoriteIcon> :
                            <FavoriteBorderOutlinedIcon style={{ fontSize: '25px' }}></FavoriteBorderOutlinedIcon>}
                    </Button>
                    <Button style={{ margin: '0px 10px 10px 10px' }} onClick={handleClose} variant='outlined' size='medium'>Close</Button>
                </DialogActions>
            </Dialog> : null }

        </div>
    )
}

export default Widget