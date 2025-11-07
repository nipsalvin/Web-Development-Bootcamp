import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    // console.log("addNote in App.jsx");
    setNotes((previousNote) => {
      return [...previousNote, note];
    });
  }

  function deleteNote(id) {
    console.log("Delete function called");
    setNotes((previousNote) => {
      return previousNote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
