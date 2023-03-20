import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Questions from "./components/Questions";
import styled from "styled-components";
import nhsLogo from "./images/nhs-logo.png";
import aire from "./images/aire.png";

const Header = styled.div`
  color: white;
  background-color: #005eb8;
  height: 100px;
`;

const App = () => {
  return (
    <div>
      <Header>
        <img
          src={nhsLogo}
          alt="NHS logo"
          style={{ width: "200px", height: "75px", marginTop: "10px" }}
        />
      </Header>
      {/* router is used to wrap all the available routes
        routes tag stores all the indiv routes
        on loading, the login page is rendered, if a success path is passed then Questions.js loads
        */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Questions />} />
        </Routes>
      </Router>
      <div>Powered by:</div>
      <img
        src={aire}
        alt="aire logo"
        style={{ width: "150px", height: "65px" }}
      />
    </div>
  );
};

export default App;
