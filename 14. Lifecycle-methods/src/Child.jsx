import React from "react";
class Child extends React.Component {
  render() {
    return <h2>This is child component</h2>;
  }
  componentWillUnmount() {
    console.log("Child is About to die");
  }
}

export default Child;