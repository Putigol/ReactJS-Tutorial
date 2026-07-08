//Class component
//function component
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Thịnh Nguyễn",
    address: "Hà Nội",
    age: 25,
  };

  handleClick(event) {
    console.log("click");
    // console.log(this.state.name);
    // console.log("random: ", Math.floor(Math.random() * 100) + 1);
    this.setState({
      name: "John Doe",
      age: Math.floor(Math.random() * 100) + 1,
    });
    // console.log(event);
  }

  handleOnMoverOver(event) {
    // console.log(event.pageX, event.pageY);
  }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I am {this.state.age} years old and I live
        in {this.state.address}.
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me!
        </button>
        <button
          onMouseOver={(event) => {
            this.handleOnMoverOver(event);
          }}
        >
          Hover me!
        </button>
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
