import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isZoomed, setIsZoomed] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setNote((previousNotes) => {
      // console.log(previousNotes);
      return { ...previousNotes, [name]: value };
    });
  }

  function handleSubmittion() {
    // console.log(event.target);
    console.log(note);
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function handleClick(event) {
    console.log("Clicked" + event.target.value);
    setIsZoomed(!isZoomed);
    event.preventDefault();
  }

  return (
    <div>
      <form className='create-note' onClick={handleClick}>
        {isZoomed && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isZoomed ? "3" : "0"}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isZoomed}> 
          <Fab onClick={handleSubmittion}>
            <AddIcon />
          </Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
