//Class component
//function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Thịnh Nguyễn",
    address: "Hà Nội",
    age: 25,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I am {this.state.age} years old and I live
        in {this.state.address}.
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
