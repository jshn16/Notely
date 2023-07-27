import React from "react";

//importing dummy notes..
import dummyNotes from "../dummy-notes";

import { Link } from "react-router-dom";

import NoteItem from "../components/NoteItem";

import CSS from "../App.css";

import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import logo from '../favicon.png'

function Notes({ notes }) {
  return (
    <section>
      <header>

        <div>
          <div className="logo">
            <a>
              <img src={logo}/>
            </a>
          </div>  
        </div>

        <div>
          <input type="text" autoFocus placeholder="Keyword" />
          <button type="submit" className="btn-common find">
            Find
          </button>
        </div>
      </header>
      <div className="create">
        <Link className="btn-common create" to="/create-note">
          Create Note
        </Link>
      </div>
      

      <div className="notes">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <footer>
        <p>©2023 Notely</p>
        <p>All Rights Reserved</p>
      </footer>
    </section>
  );
}

export default Notes;
