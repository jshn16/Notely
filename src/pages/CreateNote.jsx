import React from "react";
import { Link } from "react-router-dom";

function CreateNote(){
    return(
      <section>
       <header>
        <Link to="/">Back</Link>
        <button>Save</button>
       </header>
       <form>
        <input type="text" placeholder="Title" autoFocus/>
        <textarea rows='28' placeholder="Note Descriptionn"></textarea>
       </form>
    </section>  
    ) 
}

export default CreateNote;