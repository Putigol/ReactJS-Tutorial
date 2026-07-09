import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //Destructuring
    const { name, age } = this.props;
    return (
      <div>
        <div>DisplayInfo</div>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
