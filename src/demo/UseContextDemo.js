import React from "react";

const ThemeContext = React.createContext("red");

const LevelThree = () => {
  const themeColor = React.useContext(ThemeContext);
  return <div style={{ color: themeColor }}>Level Three</div>;
};

const LevelTwo = () => {
  return (
    <div>
      Level Two
      <LevelThree />
    </div>
  );
};

const LevelOne = () => {
  return (
    <div>
      Level One
      <LevelTwo />
    </div>
  );
};

const UseContextDemo = () => {
  return (
    <ThemeContext.Provider value="yellow">
      <div>
        <LevelOne />
      </div>
    </ThemeContext.Provider>
  );
};

export default UseContextDemo;
