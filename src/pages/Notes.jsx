import React from "react";

//importing dummy notes..
import dummyNotes from "../dummy-notes";

import { Link } from "react-router-dom";

import NoteItem from "../components/NoteItem";

import CSS from "../App.css";

function Notes({ notes }) {
  return (
    <section>
      <header>
        <div>
          <h1>My Notes</h1>
        </div>

        <div>
          <input type="text" autoFocus placeholder="Keyword" />
          <button type="submit" className="btn-common">Find</button>
        </div>
      </header>
      <div className="notes">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <div>
        <Link className="btn-common" to="/create-note">Create Note</Link>
      </div>
    </section>
  );
}

export default Notes;
