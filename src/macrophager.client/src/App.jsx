import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/'></Route>
                        <Route index element={<Home></Home>}></Route>
                        <Route path='login' element={<Login></Login>}></Route>
                    <Route path='users'>
                        <Route index element={<List></List>}></Route>
                        <Route path=':username' element={<Single></Single>}></Route>
                        <Route path='new' element={<New></New> }></Route>
                    </Route>
                    <Route path='products'>
                        <Route index element={<List></List>}></Route>
                        <Route path=':product_id' element={<Single></Single>}></Route>
                        <Route path='new' element={<New></New>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;