import { React, useEffect, useState } from "react";
import { Routes, Route, Link /* useNavigate */ } from "react-router-dom";
import styled from "styled-components";
import Clock from "react-live-clock";
// import "./styles/App.css";

// colors
import ColorFolder from "./styles/colors";
import Variable from "./data/Variables";
import BookmarkList from "./data/BookmarkList";

// components
import Headers from "./modules/Headers";
import Bookmark from "./modules/Bookmark";
import SearchBar from "./modules/SearchBar";
import NotFound from "./modules/NotFound";

// styles
import ThreeDotLoader from "./styles/ThreeDotLoader";
import TwistingSquares from "./styles/TwistingSquares";

function App() {
  const [selectedFolder, setSelectedFolder] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // const navigate = useNavigate();

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
    // navigate("/");
  };

  useEffect(() => {
    const filteredByFolder =
      selectedFolder === "All"
        ? BookmarkList
        : BookmarkList.filter((bookmark) => bookmark.folder === selectedFolder);

    const filteredBySearch =
      searchTerm === ""
        ? filteredByFolder
        : filteredByFolder.filter((bookmark) =>
            bookmark.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

    setFilteredBookmarks(filteredBySearch);
  }, [selectedFolder, searchTerm]);

  const [filteredBookmarks, setFilteredBookmarks] = useState(BookmarkList);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AppContainer>
      <div className="App">
        <Headers handleClick={handleFolderClick} />

        <Container>
          <Link onClick={() => handleFolderClick("All")}>
            <Header1>Bookmarks</Header1>
          </Link>
          <Text>{Variable.ver}</Text>
        </Container>
        <Header3 color={ColorFolder.sky}>
          <div>
            <Clock
              format={"ddd MMM DD"}
              ticking={false}
              timezone={"Asia/Seoul"}
            />
            {"  "}
            <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
          </div>
        </Header3>

        {/* <ThreeDotLoader /> */}
        {/* <TwistingSquares /> */}

        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Bookmark
                filterBmks={filteredBookmarks}
                selectedFolder={selectedFolder}
              />
            }
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-decoration: none;
  text-align: center;
  background-color: ${ColorFolder.black};
`;

const Container = styled.h3`
  display: flex;
  bottom: 0;
  text-align: center;
  align-items: 0;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color || ColorFolder.white};
`;

const HeaderMargin = 10;
const unit = "px";
const Header1 = styled.h3`
  font-size: 50px;
  /* margin-bottom: -15px; */
  margin-top: ${HeaderMargin}${unit};
  margin-bottom: ${HeaderMargin}${unit};
  color: ${(props) => props.color || ColorFolder.white};

  :hover {
    color: ${ColorFolder.cyan};
  }
`;

const Header3 = styled.div`
  font-size: 30px;
  /* margin-top: -10px; */
  margin-bottom: ${HeaderMargin * 3}${unit};
  color: ${(props) => props.color || ColorFolder.white};
`;

export default App;
