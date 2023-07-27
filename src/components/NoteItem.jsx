import React from "react";
import { Link } from "react-router-dom";

import useCreateDate from "./useCreateDate";

import EditRoundedIcon from "@mui/icons-material/EditRounded";



function NoteItem({ note }) {
  const date = useCreateDate();
  return (
    <a className="note">
      <h4>{note.title}</h4>

      <p>
        {note.description.length > 150
          ? note.description.substr(0, 130) + `...`
          : note.description}
      </p>

      <Link className="edit" to={`/edit-note/${note.id}`}>
        <EditRoundedIcon />
      </Link>

      <span>Edited: {note.date}</span>
    </a>
  );
}

export default NoteItem;
