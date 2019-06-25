import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div>
      <h1>Demo</h1>
      <ul>
        <li>
          <Link to="/demo/useState">useState</Link>
        </li>
        <li>
          <Link to="/demo/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/demo/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/demo/useRef-useLayoutEffect">
            useRef and useLayoutEffect
          </Link>
        </li>
        <li>
          <Link to="/demo/useContext">useContext</Link>
        </li>
      </ul>
      <h1>Exercise</h1>
      <Link to="/exercise">Click here</Link>
    </div>
  );
};

export default Home;
