import React from "react";
import { useState } from "react";

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
