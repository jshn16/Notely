import React from "react";

//importing dummy notes..
import dummyNotes from '../dummy-notes'


import { Link } from "react-router-dom";


import NoteItem from "../components/NoteItem";



function Notes({notes}) {
  return (
    <section>
      <header>
        <h2>My Notes</h2>
        <input type="text" autoFocus placeholder="Keyword" />
        <button>find</button>
      </header>
      <div className="notes">
        {
            notes.map(note=><NoteItem key={note.id} note={note}/>)
            
        }
      </div>
      <Link className="btn-common">Edit</Link>
    </section>
  );
}

export default Notes;
