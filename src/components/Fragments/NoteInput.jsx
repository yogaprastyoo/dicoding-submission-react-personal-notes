import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleCharLimit: 50,
      remainingChars: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    const title = e.target.value;
    const remainingChars = this.state.titleCharLimit - title.length;
    if (title.length <= this.state.titleCharLimit) {
      this.setState(() => {
        return {
          title,
          remainingChars,
        };
      });
    }
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
        remainingChars: 50,
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.remainingChars}</p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
