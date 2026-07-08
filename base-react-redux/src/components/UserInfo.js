import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "Thịnh Nguyễn",
    address: "Hà Nội",
    age: 25,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    alert("submit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name}, I am {this.state.age} years old and I live
        in {this.state.address}.
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <br />

          <label>Your name: </label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <br />

          <label>Your age: </label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

export default UserInfo;
