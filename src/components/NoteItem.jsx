import React from "react";
import { Link } from "react-router-dom";

import useCreateDate from "./useCreateDate";

function NoteItem({note}){
    const date=useCreateDate();
    return(
        <Link className="note" to={`/edit-note/${note.id}`}>
            <h4>{note.title}</h4>
           
            <p>{note.description.length>50? (note.description.substr(0,50))+`...`:(note.description)}</p>

            <span>Edited: {note.date}</span>
            
        </Link>
    )
}

export default NoteItem;