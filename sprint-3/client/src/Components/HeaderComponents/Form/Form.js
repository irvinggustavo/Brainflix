import React from "react";
import "./Form.scss";

// components
import SearchBar from "../SearchBar/SearchBar";

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <SearchBar placeholder="SEARCH" />
      </form>
    );
  }
}

export default Form;
