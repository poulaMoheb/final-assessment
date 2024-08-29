import React, { useState } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {
    let [isLoggedIn,setIsLoggedIn]=useState(false);
    let [users,setUsers]=useState([
        {   
            id:1,
            userName:'PaulaMoheb12',
            mail:'poulamoheb12@gmail.com',
            password:'123'
        },
        {
            id:2,
            userName:'joedoe32',
            mail:'pola_loka@yahoo.com',
            password:'324'
        }
    ])
      
    return (
        <div className='parent-container'>
            <BrowserRouter>
                <ResponsiveAppBar isLoggedIn={isLoggedIn}/>
                <Routes>
                    <Route path='/' element={<Main/>}></Route>
                    <Route path='/login' element={<SignIn users={users} setIsLoggedIn={setIsLoggedIn}/>}></Route>
                    <Route path='/signup' element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
