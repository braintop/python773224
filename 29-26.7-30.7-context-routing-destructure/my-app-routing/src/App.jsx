import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NotFound } from './Pages/NotFound';
import { Contact } from './Pages/Contact';

function App() {

    return (
        <>
            <h1>Hello routing</h1>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>

        </>
    )
}

export default App
