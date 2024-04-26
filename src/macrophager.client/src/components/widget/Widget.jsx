
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

import http from '../../http-common.js';
import { useState, useEffect, forwardRef } from 'react';

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
        case 'friend':
            data = {
                title: 'FRIEND POST',
                isMoney: false,
                link: 'Friend Username',
                icon: <PersonIcon className='icon' style={{ color: "#5F42CC", backgroundColor: "transparent" }}></PersonIcon>,
                message: 'I binged ate at Kura ;c Guys Help OMG OMGOMG HOW d"'
            };
            break;

        case 'none':
            data = {
                title: 'NO NEW POSTS',
                isMoney: false,
                link: 'View My Timeline',
                icon: <ExploreOutlinedIcon className='icon' style={{ backgroundColor: "transparent", color: "#444444" }}></ExploreOutlinedIcon>,
                message: 'No More Posts Found Today',
            };
            break;
        default:
            break;
    }

    return (
        <div className='Widget'>
            <div className='left'>
                <span className={type == 'friend' ? 'title friend' : 'title explore'}>{data.title}</span>
                {/* Change this to open Post Dialog instead*/}
                <span className='counter' onClick={handleClickOpen}>{data.message}</span>
                <Link to={type == 'friend' ? '/users/frienduser' : '/users/timeline'} style={{ textDecoration: 'none' }}>
                    <span className={type == 'friend' ? 'link friend' : 'link explore'}>{data.link}</span>
                </Link>
                
            </div>
            <div className='right'>
                {/*<div className='percentage positive'>*/}
                {/*    {diff}&nbsp;&nbsp;<ThumbUpIcon></ThumbUpIcon>*/}
                {/*</div>*/}
                {data.icon}
            </div>
            {/*            <PostDialog></PostDialog>*/}
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Post {'#123456'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <h3>I binged ate at Kura ;c Guys Help OMG OMGOMG HOW d</h3>
                    </DialogContentText>
                    <DialogContentText>
                        <p>username</p>
                    </DialogContentText>
                    <DialogContentText>
                        <p style={{ textAlign: 'justify'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p
                        </p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{ marginBottom: '10px' }} onClick={toggleLike} variant='outlined' size='medium'>
                        {like ? <FavoriteIcon style={{ fontSize: '25px' }}></FavoriteIcon> :
                            <FavoriteBorderOutlinedIcon style={{ fontSize: '25px' }}></FavoriteBorderOutlinedIcon>}
                    </Button>
                    <Button style={{ margin: '0px 10px 10px 10px' }} onClick={handleClose} variant='outlined' size='medium'>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Widget