import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color folder
import ColorFolder from "../styles/colors";

// Components
// import BookmarkList from "../data/BookmarkList.js";
import CreateLink from "../modules/CreateLink";

function Bookmark({ filterBmks, selectedFolder }) {
  const [bmks, setBmks] = useState([]);

  useEffect(() => {
    setBmks(filterBmks);
  }, [filterBmks]);

  return (
    <BmkContaier>
      <div className="App">
        <header className="App-header">
          <GridContainer>
            {bmks.map((link, index) => (
              <CreateLink
                className="BTNs"
                key={index}
                name={link.name}
                domain={link.domain}
                icon={link.icon}
                selectedFolder={selectedFolder}
              />
            ))}
          </GridContainer>
        </header>
      </div>
    </BmkContaier>
  );
}

const BmkContaier = styled.div`
  .App {
    text-decoration: none;
    text-align: center;
    background-color: ${ColorFolder.black};
  }

  .text {
    color: ${ColorFolder.white};
  }

  .App-header {
    background-color: ${ColorFolder.black};
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

const delay = 200;
const GridContainer = styled.div`
  /* transition: ${delay}ms; */
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  :hover {
    /* transition: ${delay}ms; */
    text-decoration: none;
    background-color: ${ColorFolder.blue};
    /* color: ${ColorFolder.black}; */
    /* border: 1px solid ${ColorFolder.blue}; */
    /* font-size: 50px; */
  }

  :active {
  }
`;

/* const Item = styled.div`
  width: 180px; /* 너비 단위 설정
  height: 7%; /* 높이 단위 설정
  /* 추가적인 스타일링 (배경색, 테두리 등)
`; */

export default Bookmark;
