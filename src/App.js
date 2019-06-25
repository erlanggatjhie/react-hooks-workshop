import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Demo</h1>
      <ul>
        <li>Use State</li>
        <li>Use Reducer</li>
        <li>Use Effect</li>
        <li>Use Context</li>
      </ul>
    </div>
  );
};

render(<App />, document.getElementById("root"));
