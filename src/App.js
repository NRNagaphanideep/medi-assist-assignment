import React from "react";
import Header from "./Components/Header";
import AACA from "./Components/AACA";
import Choose from "./Components/Choose";
import Learn from "./Components/Learn";
import Placement from "./Components/Placement";
import StartPrep from "./Components/StartPrep";

import "./App.css";

const App = () => {
  return (
    <div className="landing-page">
      <Header />
      <AACA />
      <Choose />
      <Learn />
      <Placement />
      <StartPrep />
    </div>
  );
};

export default App;
