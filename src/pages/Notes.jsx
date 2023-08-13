import React, { useEffect, useState } from "react";

//importing dummy notes..


import { Link } from "react-router-dom";

import NoteItem from "../components/NoteItem";

import CSS from "../App.css";

import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import logo from "../favicon.png";

function Notes({ notes }) {
  useEffect(() => {
    document.title = "Notely";
  }, []);

  const [text, setText] = useState("");
  const [searchedNotes, setSearchedNotes] = useState(notes);

  function handleSearch() {
    setSearchedNotes(
      notes.filter((note) => {
        if (
          //If searched value after converting to lowercase matches to title or description of the notes than return all

          note.title.toLowerCase().match(text.toLowerCase()) ||
          note.description.toLowerCase().match(text.toLowerCase())
        ) {
          return note;
        }
      })
    );
  }

  return (
    <section>
      <header>
        <div>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} />
            </Link>
          </div>
        </div>

        <div>
          <input
            type="text"
            autoFocus
            placeholder="Find Notes"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              {
                handleSearch();
              }
            }}
          />
          <button
            type="submit"
            className="btn-common find"
            onClick={handleSearch}
          >
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
        {searchedNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <div className="preview">
        
      </div>
      <footer>
        <p>©2023 Notely</p>
        <p>All Rights Reserved</p>
      </footer>
    </section>
  );
}

export default Notes;
