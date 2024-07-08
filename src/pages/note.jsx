import React from "react";
import NoteHeader from "../components/Layouts/NoteHeader";
import NoteBody from "../components/Layouts/NoteBody";
import { getInitialData } from "../utils/index";

class NotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id, archived) {
    const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !archived } : note));
    this.setState({ notes });
  }

  onSearchNoteHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    return (
      <div className="note-app">
        {/* Header */}
        <NoteHeader setSearchQuery={this.onSearchNoteHandler} />

        {/* Body */}
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
          searchQuery={this.state.searchQuery}
        />
      </div>
    );
  }
}

export default NotePage;
