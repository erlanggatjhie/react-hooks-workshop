import React from "react";

const UseReducerDemo = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span> {count} </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default UseReducerDemo;

// AFTER
// const reducer = (count, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return count + 1;
//     case "DECREMENT":
//       return count + 0;
//     default:
//       return 0;
//   }
// };

// const UseReducerDemo = () => {
//   const [count, dispatch] = React.useReducer(reducer, 0);

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//       <span> {count} </span>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//     </div>
//   );
// };
