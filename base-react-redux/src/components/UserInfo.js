import React from "react";
class UserInfo extends React.Component {
  state = {
    name: "",
    address: "Hà Nội",
    age: "",
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
    alert("Submit");
    console.log(this.state);

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random", //tránh trùng lặp id
      name: this.state.name,
      age: this.state.age,
    });
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
