import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import ContactMenu from './Components/ContactMenu';
import Navbar from './Components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/contact" element={isLoggedIn ? <ContactMenu /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
