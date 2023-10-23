import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import EditJob from './pages/EditJob/EditJob';
import AddNewJob from './pages/AddNewJob/AddNewJob';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/edit" element={<EditJob></EditJob>}></Route>
        <Route path="/newjob" element={<AddNewJob></AddNewJob>}></Route>
      </Routes>
    </div>
  );
}

export default App;
