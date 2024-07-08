import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };

    this.onSearchQueryChangeEventHandler = this.onSearchQueryChangeEventHandler.bind(this);
  }

  onSearchQueryChangeEventHandler(e) {
    this.setState(() => {
      return {
        searchQuery: e.target.value,
      };
    });

    this.props.setSearchQuery(e.target.value);
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.searchQuery}
          onChange={this.onSearchQueryChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
