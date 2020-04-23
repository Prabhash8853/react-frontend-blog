import React, { useEffect } from "react";
import "./App.css";
import Routes from "./routes/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


library.add(fab, far);

const App = (props) => {
  return (
    <>
      
      <Routes />
    </>
  );
};
export default App;
