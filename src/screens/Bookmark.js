import { React } from "react";
import styled from "styled-components";

// css
import "../styles/App.css";

// Components
import BookmarkList from "../data/BookmarkList.js";
import CreateLink from "../modules/CreateLink";

function Bookmark() {
  return (
    <div className="App">
      <header className="App-header">
        <GridContainer>
          {BookmarkList.map((link, index) => (
            <CreateLink
              key={index}
              name={link.name}
              domain={link.domain}
              icon={link.icon}
            />
          ))}
        </GridContainer>
      </header>
    </div>
  );
}

const GridContainer = styled.div`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

/* const Item = styled.div`
  width: 180px; /* 너비 단위 설정
  height: 7%; /* 높이 단위 설정
  /* 추가적인 스타일링 (배경색, 테두리 등)
`; */

export default Bookmark;
