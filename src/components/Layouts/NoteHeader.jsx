import React from "react";
import NoteSearch from "../Fragments/NoteSearch";

const NoteHeader = ({ setSearchQuery }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default NoteHeader;
