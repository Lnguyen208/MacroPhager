
import './New2.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';

import { useState } from 'react';
import http from '../../http-common.js';
import defaultFoodItemImg from '../../assets/default-food-item.jpg';
import { productInputs } from '../../placeholders/FormSource';

const New2 = () => {
    const inputs = productInputs;
    const title = 'Create New Food Item'


    const handleFormSubmit = (e) => {
        e.preventDefault();

    }


    return (
        <div className='New2'>
            <Sidebar></Sidebar>
            <div className='newContainer'>
                <NavBar></NavBar>
                <div className='top'>
                    <h1 className='title'>{title}</h1>
                </div>
                <div className='bottom'>
                 <div className='left'>
                        <img src={defaultFoodItemImg} alt=''></img>
                    </div>
                    <div className='right'>
                        <form onSubmit={handleFormSubmit}>
                            {inputs.map((input) => (
                                <div className='formInput' key={input.id}>
                                    <label>{input.label}</label>
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} pattern={input.pattern} required></input>
                                </div>
                            ))}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <input className='usersubmit' type='submit'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New2