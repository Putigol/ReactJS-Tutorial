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
    this.setState({
      name: "Thịnh",
    });
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event.target.value);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    alert("submit");
    console.log(this.state);
  };

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
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
