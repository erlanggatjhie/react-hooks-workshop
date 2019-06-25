import React from "react";

class UseStateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span> {this.state.count} </span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default UseStateDemo;

// AFTER

// const UseStateDemo = () => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <span> {count} </span>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// };
