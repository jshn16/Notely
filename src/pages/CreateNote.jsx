import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid'
import CSS from '../App.css'


//importing createDate custom hook
import useCreateDate from "../components/useCreateDate";


  const CreateNote = ({setNotes}) => {
  const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const date=useCreateDate();

  function handleSubmit(event) {
    event.preventDefault();

    if(title && description){
        let note={
          id:uuid(),
          date,
          title,
          description
        }
        setNotes(prevNotes =>[note, ...prevNotes])

        
        console.log(note)


        navigate('/')
      
    }
    
  }

  return (
    <section>
      
        
      <div className="actions">
        <Link className="btn-other" to="/">Back</Link>
        <button className="btn-common .create" onClick={handleSubmit}>Save</button>
      </div>

<hr />

      <form className="form" onSubmit={handleSubmit}>

        <h1>Create Note</h1>
        
        <input
          type="text"
          placeholder="Title"
          autoFocus
          required
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        
        <textarea
          rows="20"
          required
          placeholder="Note Descriptionn"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
