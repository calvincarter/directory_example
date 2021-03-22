import React from "react";
// import "./style.css";

function SearchForm({props}) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="searchForm">Search:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="name"
            list="names"
            type="text"
            className="form-control"
            placeholder="Type here to search"
            id="name"
          />
          <datalist id="names">
            {props.names.map(name => (
              <option value={name} key={name} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>

          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Sort Alphabetically
          </button>
        </div>
      </form>
    );
  }

  export default SearchForm;