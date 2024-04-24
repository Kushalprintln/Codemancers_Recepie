import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// IMPORTING BROWSER ROUTER AND ALL PAGES
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Recepie from './Recepie/Recepie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='recepie' element={<Recepie/>}/>
            </Route>
        </Routes>
    </BrowserRouter>

)
