import React, { useState } from "react";


const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(keyword);
  };
  return (
    <div className="form-wrapper"> 
      <form onSubmit={(e) => handleSubmit(e)} >
        <label>
          Search Here

          <input
            className="input"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>

        <button> Search </button>

        <p style={{ color: "Black" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      </form>
    </div>
  );
};

export default Search;
