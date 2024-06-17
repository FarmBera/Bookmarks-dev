import { React, useState, useEffect } from "react";
import styled from "styled-components";

// color folder
import ColorFolder from "../styles/colors";

// Components
// import BookmarkList from "../data/BookmarkList.js";
import CreateLink from "../modules/CreateLink";

function Recent({ recentBmks, selectedFolder, onBmkClick, filterTag }) {
  const [bmks, setBmks] = useState([]);

  useEffect(() => {
    setBmks(recentBmks);
  }, [recentBmks, filterTag]);

  const handleClick = (bmk) => {
    onBmkClick(bmk);
  };

  if (filterTag !== "All") {
    return;
  } else if (bmks.length === 0) {
    // console.log("Empty!");
    return (
      <div>
        <BmkContaier>
          <ContainerNO>
            <h3>No Recent Visits</h3>
          </ContainerNO>
        </BmkContaier>
      </div>
    );
  } else {
    // 정상 출력
    return (
      <div>
        <BmkContaier>
          <h3>Recent</h3>
          <div className="App">
            <div className="App-header">
              <GridContainer>
                {bmks.map((link, index) => (
                  <div key={index} onClick={() => handleClick(link)}>
                    <CreateLink
                      className="BTNs"
                      key={index}
                      name={link.name}
                      domain={link.domain}
                      icon={link.icon}
                      selectedFolder={selectedFolder}
                    />
                  </div>
                ))}
              </GridContainer>
            </div>
          </div>
        </BmkContaier>
      </div>
    );
  }
}

const ContainerNO = styled.div`
  margin-bottom: -30px;
`;

const BmkContaier = styled.div`
  margin-bottom: 50px;
  h3 {
    color: ${ColorFolder.white};
    font-size: 30px;
    margin-top: -10px;
    margin-bottom: 0px;
  }

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

export default Recent;
