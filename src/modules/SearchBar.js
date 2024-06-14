import React, { /* useEffect, */ useState } from "react";
import { /* Sticky, */ StickyContainer } from "react-sticky";
import styled from "styled-components";

// color
import ColorFolder from "../styles/colors";

const SearchBar = () => {
  return (
    <Container>
      {/* <InputBox> */}
      <input
        className="inputbox"
        type="text"
        placeholder="Search Bookmarks"
        // width={100}
        size={30}
      ></input>
      {/* </InputBox> */}
      <button type="submit">Search!</button>
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
    width: 300px;
    height: ${heightVal}px;
  }

  button {
    width: 70px;
    height: ${heightVal + 6}px;
  }
`;

export default SearchBar;
