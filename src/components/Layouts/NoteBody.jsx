import React from "react";
import NoteInput from "../Fragments/NoteInput";
import NoteList from "../Fragments/NoteList";

const NoteBody = ({ notes, addNote, onDelete, onArchive, searchQuery }) => {
  // Filter notes based on search query
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      {/* Input Note */}
      <NoteInput addNote={addNote} />

      {/* Active Notes */}
      <NoteList title="Catatan Aktif" notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />

      {/* Archived Notes */}
      <NoteList title="Arsip" notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
};

export default NoteBody;
