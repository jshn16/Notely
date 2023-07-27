import React , {Component, useEffect} from 'react';

import CSS from './App.css'

// importing routes for navigation
import { BrowserRouter, Routes, Route, Link, json } from "react-router-dom";

import dummyNotes from './dummy-notes'

//import useState

import {useState} from "react"


//import pages
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote"

function App() {
  //if local storage has no notes take it as an empty string to render the view
  const[notes, setNotes]=useState( JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes))
  })

//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])

  return (
    <div className="container">
    
    

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes}/>} />
            <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
            <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>}/>
          </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
