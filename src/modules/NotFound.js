import styled from "styled-components";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./styles/App.css";

// colors
import ColorFolder from "../styles/colors";
// import Variable from "../data/Variables";

function NotFound() {
  return (
    <Container>
      <h1>Page Not Found!</h1>
    </Container>
  );
}

const Container = styled.h1`
  /* display: flex; */
  padding-bottom: 50%;
  /* bottom: 0; */
  /* text-align: center; */
  /* align-items: 0; */
  /* justify-content: center; */
  color: ${ColorFolder.white};
`;

// const Text = styled.span`
//   color: ${(props) => props.color || ColorFolder.white};
// `;

// const HeaderMargin = 10;
// const unit = "px";
// const Header1 = styled.h3`
//   font-size: 50px;
//   /* margin-bottom: -15px; */
//   margin-top: ${HeaderMargin}${unit};
//   margin-bottom: ${HeaderMargin}${unit};
//   color: ${(props) => props.color || ColorFolder.white};
// `;

// const Header3 = styled.div`
//   font-size: 30px;
//   /* margin-top: -10px; */
//   margin-bottom: ${HeaderMargin * 3}${unit};
//   color: ${(props) => props.color || ColorFolder.white};
// `;

export default NotFound;
