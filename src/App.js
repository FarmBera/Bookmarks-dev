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
import Recent from "./modules/Recent";

// unique styles
import ThreeDotLoader from "./styles/ThreeDotLoader";
import TwistingSquares from "./styles/TwistingSquares";

function App() {
  const [selectedFolder, setSelectedFolder] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(BookmarkList);
  const [recent, setRecent] = useState([]);

  const handleFolderClick = (folderName) => setSelectedFolder(folderName); // 최상단 헤더 클릭 시 필터링

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

    setFiltered(filteredBySearch);

    // console.log(recent);
  }, [selectedFolder, searchTerm, recent]);

  const handleSearchChange = (event) => setSearchTerm(event.target.value); //검색창 입력 시
  const handleClearSearch = () => setSearchTerm(""); // 검색창 초기화
  const handleBmkClick = (bookmark) => {
    setRecent((prevVisits) => {
      const updatedVisits = [
        bookmark,
        ...prevVisits.filter((b) => b.name !== bookmark.name),
      ];
      return updatedVisits.slice(0, 5); // 최대 5개 기록 유지
    });
  }; // 북마크 클릭하면 최근 항목에 추가
  const handleRecentClear = () => setRecent([]); // 최근 항목 초기화

  return (
    <AppContainer>
      <div className="App">
        {/* 최상단 헤더 부분 */}
        <Headers handleClick={handleFolderClick} />

        {/* 제목 부분 */}
        <Container>
          <Link onClick={() => handleFolderClick("All")}>
            <h3>Bookmarks</h3>
          </Link>
          <Text>{Variable.ver}</Text>
        </Container>

        {/* 시계 부분 */}
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

        {/* 검색 상자 부분 */}
        <SearchBar
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          handleClearSearch={handleClearSearch}
          handleRecentClear={handleRecentClear}
        />
        {/* 최근 항목 표시부분 */}
        <Recent recentBmks={recent} filterTag={selectedFolder} />

        {/* 하단 북마크 리스트 출력 */}
        <Routes>
          <Route
            path="/"
            element={
              <Bookmark
                filterBmks={filtered}
                selectedFolder={selectedFolder}
                onBmkClick={handleBmkClick}
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

const HeaderMargin = 10;
const unit = "px";
const Container = styled.h3`
  display: flex;
  bottom: 0;
  text-align: center;
  align-items: 0;
  justify-content: center;

  /* Bookmarks 제목 부분 링크*/
  a {
    text-decoration: none;
  }
  a:hover {
    color: ${ColorFolder.green};
  }

  /* Bookmarks 제목 부분 */
  h3 {
    font-size: 50px;
    /* margin-bottom: -15px; */
    margin-top: ${HeaderMargin}${unit};
    margin-bottom: ${HeaderMargin}${unit};
    color: ${(props) => props.color || ColorFolder.white};

    :hover {
      color: ${ColorFolder.cyan};
    }
  }
`;

const Text = styled.span`
  color: ${(props) => props.color || ColorFolder.white};
`;

// const Header1 = styled.h3`
//   font-size: 50px;
//   /* margin-bottom: -15px; */
//   margin-top: ${HeaderMargin}${unit};
//   margin-bottom: ${HeaderMargin}${unit};
//   color: ${(props) => props.color || ColorFolder.white};

//   :hover {
//     color: ${ColorFolder.cyan};
//   }
// `;

const Header3 = styled.div`
  font-size: 30px;
  /* margin-top: -10px; */
  margin-bottom: ${HeaderMargin * 3}${unit};
  color: ${(props) => props.color || ColorFolder.white};
`;

export default App;
