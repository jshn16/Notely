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
      <div className="actions">
        <Link className="btn-other" to="/">Back</Link>
        <button className="btn-common" onClick={handleChange}>Save</button>
        <button className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          required
          defaultValue={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          rows="20" required
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
