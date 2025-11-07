import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((previousNote) => {
      return { ...previousNote, [name]: value };
    });
  }

  function handleSubmission() {
    // console.log(note);
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
        <button onClick={handleSubmission}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
