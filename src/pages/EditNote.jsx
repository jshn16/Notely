import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCreateDate from "../components/useCreateDate";
import CSS from "../App.css";

const EditNote = ({ notes, setNotes }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  // console.log(id)
  let findNote = notes.find((note) => note.id === id);
  // console.log(`${findNote.title}, ${findNote.id}`);

  const [title, setTitle] = useState(findNote.title);
  const [description, setDescription] = useState(findNote.description);

  const date = useCreateDate();

  const handleChange = (event) => {
    event.preventDefault();

    if (title && description) {
      const newNote = { ...findNote, title, description, date };

      const saveNewNote = notes.map((note) => {
        if (note.id == id) {
          note = newNote;
        }
        return note;
      });

      setNotes(saveNewNote);
    }
    navigate("/");
  };

  const handleDelete = () => {
    let removeNote = notes.filter((note) => note.id != id);
    setNotes(removeNote);
    navigate("/");
  };

  return (
    <section>
      <header>
        <Link to="/">Back</Link>
        <button onClick={handleChange}>Save</button>
        <button onClick={handleDelete}>Delete</button>
      </header>
      <form>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          defaultValue={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Note Descriptionn"
          defaultValue={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
