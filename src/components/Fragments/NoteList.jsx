import React from "react";
import NoteItem from "./NoteItem";

const renderNotes = (notes, onDelete, onArchive) => (
  <div className="notes-list">
    {notes.map((note) => (
      <NoteItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} />
    ))}
  </div>
);

const renderEmptyMessage = () => <p className="notes-list__empty-message">Tidak ada catatan</p>;

const NoteList = ({ title, notes, onDelete, onArchive }) => {
  return (
    <>
      <h2>{title}</h2>
      {notes.length ? renderNotes(notes, onDelete, onArchive) : renderEmptyMessage()}
    </>
  );
};

export default NoteList;
