import styled from "styled-components";
// import "./styles/App.css";

// colors
import ColorFolder from "./styles/colors";

// components
import Headers from "./screens/Headers";
import Bookmark from "./screens/Bookmark";
import Clock from "react-live-clock";

function App() {
  return (
    <div className="App">
      <Headers />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Container>
        <Header1>Bookmarks</Header1>
        <Text>v0.1.2-rc</Text>
      </Container>
      <Header3 color={ColorFolder.sky}>
        <div>
          <Clock
            format={"ddd MMM DD"}
            ticking={false}
            timezone={"Asia/Seoul"}
          />
          &nbsp;&nbsp;
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"} />
        </div>
      </Header3>
      <Bookmark />
    </div>
  );
}

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
`;

const Header3 = styled.div`
  font-size: 30px;
  /* margin-top: -10px; */
  margin-bottom: ${HeaderMargin * 3}${unit};
  color: ${(props) => props.color || ColorFolder.white};
`;

export default App;
