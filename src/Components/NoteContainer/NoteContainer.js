import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h1>Evaluacion 4 front end </h1>
      <h2>Post It Simulator!</h2>
      <h3>Que tan importante es tu dia?</h3>
      <hr/>
      <br/>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>Nos vuelve pronto</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
