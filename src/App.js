import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Home from "./Home";
import UseStateDemo from "./demo/UseStateDemo";
import UseReducerDemo from "./demo/UseReducerDemo";
import UseEffectDemo from "./demo/UseEffectDemo";
import UseRefAndLayoutEffectDemo from "./demo/UseRefAndLayoutEffectDemo";
import UseContextDemo from "./demo/UseContextDemo";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <UseStateDemo path="/demo/useState" />
      <UseReducerDemo path="/demo/useReducer" />
      <UseEffectDemo path="/demo/useEffect" />
      <UseRefAndLayoutEffectDemo path="/demo/useRef-useLayoutEffect" />
      <UseContextDemo path="/demo/useContext" />
    </Router>
  );
};

render(<App />, document.getElementById("root"));
