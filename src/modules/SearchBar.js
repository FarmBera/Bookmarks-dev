import React, { /* useEffect, */ useState } from "react";
import styled from "styled-components";

// color
import ColorFolder from "../styles/colors";

const SearchBar = () => {
  return (
    <Container>
      <input
        className="inputbox"
        type="text"
        placeholder="Search Bookmarks"
        // width={100}
        size={30}
      ></input>
      <button type="submit">Search</button>
    </Container>
  );
};

// CSS variables
const heightVal = 30;

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
    transition: 10ms;
    width: 220px;
    height: ${heightVal + 5}px;
    background-color: ${ColorFolder.gray};
    color: ${ColorFolder.white};
    font-size: 20px;
    border: 0;
    margin-top: 5px;
  }
  input:hover {
    transition: 10ms;
    background-color: ${ColorFolder.cyan};
  }

  button {
    width: 70px;
    margin-left: 10px;
    height: ${heightVal + 6}px;
    border: 0;
  }
  button:hover {
    background-color: ${ColorFolder.cyan};
  }
`;

export default SearchBar;
