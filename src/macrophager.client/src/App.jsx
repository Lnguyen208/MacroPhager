import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import Timeline from './pages/timeline/Timeline';
import Meals from './pages/meals/Meals';
import Posts from './pages/posts/Posts';
import { userInputs, productInputs } from './placeholders/FormSource';
import './styles/dark.scss';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';

function App() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={ darkMode ? 'App dark' : 'App' }>
            <BrowserRouter>
                <Routes>
                    <Route path='/'></Route>
                        <Route index element={<Home></Home>}></Route>
                    <Route path='login' element={<Login></Login>}></Route>
                    <Route path='register' element={<New inputs={userInputs} title='New User Registration' itemType='user'></New>}></Route>
                    <Route path='foodlog'>
                        <Route index element={<List type='Daily Log'></List>}></Route>
                        <Route path='new' element={<New inputs={productInputs} title='Add New Food Item or Meal' itemType='food'></New>}></Route>
                        <Route path='meals' element={<Meals></Meals>}></Route>
                    </Route>
                    <Route path='friends'>
                        <Route index element={<List type='Friends'></List>}></Route>
                    </Route>
                    <Route path='users'>
                        <Route index element={<div>Hello World!</div>}></Route>
                        <Route path=':username' element={<Single></Single>}></Route>
                        <Route path='timeline' element={<Timeline></Timeline>}>
                            <Route path=':post_id' element={<Posts></Posts>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;