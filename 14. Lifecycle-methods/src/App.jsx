import React from "react";
import Child from "./Child";
class App extends React.Component {
  constructor() {
    console.log("1. constructor");
    super();
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2/5. getDerivedStateFromProps");
    // if (props.name == "akshay") {
    //   return { count: 100 };
    // }
    return null; // returning null bcox we do not want to update the state value
  }
  render() {
    console.log("3/7.render");
    return (
      <div>
        {/* <Child /> */}
        <h2>Count is {this.state.count}</h2>
        <h3>The name is {this.props.name}</h3>
        <h3>The name is {this.props.age}</h3>
        {/* <button onClick={this.increment.bind(this)}>Increment</button> */}{" "}
        {/* using bind chnaging the refernce of this */}
        <button onClick={() => this.increment()}>Increment</button>
        {/* using arrow function  */}
      </div>
    );
  }
  increment() {
    this.setState({ count: 1 });
  }
  componentDidMount() {
    console.log("4.componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("6.shouldComponentUpdate ");
    if (nextState.count != this.state.count) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("8.getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("9. componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("10. componentWillUnmount");
  }
}
export default App;
