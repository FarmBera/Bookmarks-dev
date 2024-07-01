import React from "react";
import styled from "styled-components";

// color
import ColorFolder from "../styles/colors";

const SearchBar = ({
  searchTerm,
  handleSearchChange,
  handleClearSearch,
  handleRecentClear,
}) => {
  return (
    <Container>
      <input
        className="inputbox"
        type="text"
        placeholder="Search Bookmarks"
        value={searchTerm}
        onChange={handleSearchChange}
        // width={100}
        size={30}
      ></input>
      <button className="clsSearch" onClick={handleClearSearch}>
        Clear
      </button>
      <button className="clsRecent" onClick={handleRecentClear}>
        Clear Recents
      </button>
    </Container>
  );
};

// CSS variables
const heightVal = 30;
const delay = 200;

const Container = styled.header`
  /* width:100px; */
  height: 30px;
  /* position: sticky; */
  top: 0;
  /* z-index: 1000; */
  background-color: ${ColorFolder.black};
  color: #fff;
  /* padding-bottom: 25px; */
  padding-bottom: ${heightVal + 10}px;

  input {
    transition: ${delay}ms;
    width: 220px;
    margin-top: 5px;
    height: ${heightVal + 5}px;
    /* border: 0; */
    border: 1px solid ${ColorFolder.white};
    background-color: ${ColorFolder.black};
    color: ${ColorFolder.white};
    font-size: 20px;
  }
  input:hover {
    transition: ${delay}ms;
    background-color: ${ColorFolder.green};
    border: 1px solid ${ColorFolder.black};
    color: ${ColorFolder.black};
  }
  input:active {
    /* background-color: ${ColorFolder.cyan}; */
    color: ${ColorFolder.black};
  }
  input:focus {
    color: ${ColorFolder.black};
    background-color: ${ColorFolder.cyan};
    border-radius: 1px;
  }

  button {
    transition: ${delay}ms;
    width: 70px;
    margin-left: 10px;
    /* margin-top: -10px; */
    height: ${heightVal + 10}px;
    border: 1px solid ${ColorFolder.white};
    background-color: ${ColorFolder.black};
    color: ${ColorFolder.white};
  }
  .clsRecent {
    width: 130px;
  }
  button:hover {
    transition: ${delay}ms;
    background-color: ${ColorFolder.red};
    color: ${ColorFolder.white};
    font-size: 18px;
    border: 1px solid ${ColorFolder.black};
  }
  button:active {
    background-color: ${ColorFolder.green};
    color: ${ColorFolder.black};
  }
`;

export default SearchBar;
