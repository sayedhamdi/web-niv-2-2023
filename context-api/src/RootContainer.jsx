import { useState } from 'react';
import { Routes,Route} from 'react-router-dom';
import { UserContext } from './context';
import { Home,About,Login}  from './pages';
import {ToastContainer} from "react-toastify"
export default function RootContainer(){
    const [username,setUserName] = useState('')
    return (
        <UserContext.Provider value={{username,setUserName}}>
            <ToastContainer />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />  
            </Routes>
        </UserContext.Provider>
    )
}