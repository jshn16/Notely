import React , {Component} from 'react';

import Css from './App.css'

// importing routes for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

import dummyNotes from './dummy-notes'

//import useState

import {useState} from "react"


//import pages
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote"

function App() {
  const[notes, setNotes]=useState(dummyNotes)
  return (
    <div className="container">
    

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes}/>} />
            <Route path="/create-note" element={<CreateNote/>} />
            <Route path='/edit-note' element={<EditNote/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
