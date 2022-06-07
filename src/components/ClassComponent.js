import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>count:{this.state.count}</h3>
      </div>
    );
  }
}

export default ClassComponent;
