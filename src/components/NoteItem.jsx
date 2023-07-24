import React from "react";
import { Link } from "react-router-dom";

function NoteItem({note}){
    return(
        <Link to={`/edit-note/${note.id}`}>
            <h4>{note.title}</h4>
           
            <p>{note.description.length>50? (note.description.substr(0,50))+`...`:(note.description)}</p>
            <hr />
        </Link>
    )
}

export default NoteItem;