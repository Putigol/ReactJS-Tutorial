import React from "react";
import { useState } from "react";
// class UserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "Hà Nội",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     alert("Submit");
//     console.log(this.state);

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random", //tránh trùng lặp id
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name}, I am {this.state.age} years old and I live
//         in {this.state.address}.
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <br />

//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />

//           <br />

//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//         <br />
//       </div>
//     );
//   }
// }

const UserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  // const [address, setAddress] = useState("Hà Nội");
  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert("Submit");

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random", //tránh trùng lặp id
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name}, I am {age} years old.
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <br />

        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />

        <br />

        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
      <br />
    </div>
  );
};
export default UserInfo;
