import { React } from "react";
import styled from "styled-components";

// css
import "../styles/App.css";

// color
import ColorFolder from "../styles/colors.js";

// Components
import BookmarkList from "../data/BookmarkList.js";
import CreateLink from "../modules/CreateLink";

function Bookmark() {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO: for 구문을 이용하여 icon_list 안의 내용물을 모두 렌더링 하는 방법 찾기 */}
        {/* <LinkedList> */}
        <GridContainer>
          {BookmarkList.map((link, index) => (
            // <Item>
            <CreateLink
              key={index}
              name={link.name}
              domain={link.domain}
              icon={link.icon}
            />
            // </Item>
          ))}
          {/* </LinkedList> */}
        </GridContainer>
      </header>
    </div>
  );
}

const Container = styled.div`
  background-color: ${ColorFolder.black};
`;

const LinkedList = styled.div`
  background-color: var(--black);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.color || ColorFolder.white};
`;

const GridContainer = styled.div`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Item = styled.div`
  width: 180px; /* 원하는 너비 단위 설정 */
  height: 7%; /* 원하는 높이 단위 설정*/
  /* 추가적인 스타일링 (배경색, 테두리 등) */
`;

export default Bookmark;
