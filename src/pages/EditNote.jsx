import React from "react";
import { Link } from "react-router-dom";

function EditNote(){
    return(
      <section>
       <header>
        <Link to="/">Back</Link>
        <button>Save</button>
        <button>Delete</button>
       </header>
       <form>
        <input type="text" placeholder="Title" autoFocus/>
        <textarea rows='28' placeholder="Note Descriptionn"></textarea>
       </form>
    </section>  
    ) 
}

export default EditNote;