import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import New2 from './pages/new/New2';
import Public from './pages/public/Public';

import Timeline from './pages/timeline/Timeline';
import Meals from './pages/meals/Meals';

import './styles/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import FoodRepo from './pages/foodrepo/FoodRepo';

function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={ darkMode ? 'App dark' : 'App' }>
            <BrowserRouter>
                <Routes>
                    <Route path='/'></Route>
                        <Route index element={<Public></Public>}></Route>
                    <Route path='login' element={<Login></Login>}></Route>
                    <Route path='register' element={<New></New>}></Route>
                    <Route path='dashboard' element={<Home></Home> }></Route>
                    <Route path='foodlog'>
                        <Route index element={<List type='Daily Log'></List>}></Route>
                        <Route path='new' element={<New2></New2>}></Route>
                        <Route path='meals' element={<Meals></Meals>}></Route>
                        <Route path='foodrepo' element={<FoodRepo></FoodRepo> }></Route>
                    </Route>
                    <Route path='friends'>
                        <Route index element={<List type='Friends'></List>}></Route>
                    </Route>
                    <Route path='users'>
                        <Route index element={<div>Hello World!</div>}></Route>
                        <Route path=':username' element={<Single></Single>}></Route>
                        <Route path='timeline' element={<Timeline></Timeline>}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;