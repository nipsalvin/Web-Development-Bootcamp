import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={handleSubmittion}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
