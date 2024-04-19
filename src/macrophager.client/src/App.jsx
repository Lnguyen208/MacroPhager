import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
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
                    <Route path='users'>
                        <Route index element={<List></List>}></Route>
                        <Route path=':username' element={<Single></Single>}></Route>
                        <Route path='new' element={<New inputs={userInputs} title='Add New User'></New> }></Route>
                    </Route>
                    <Route path='products'>
                        <Route index element={<List></List>}></Route>
                        <Route path=':product_id' element={<Single></Single>}></Route>
                        <Route path='new' element={<New inputs={productInputs} title='Add New Product'></New>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;