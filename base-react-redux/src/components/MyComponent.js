//Class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [
        { id: 1, name: "Thịnh Nguyễn", age: 25 },
        { id: 2, name: "Phú Thịnh", age: 30 },
        { id: 3, name: "Eric", age: 36 },
      ],
    };
  }

  handleAddNewUser = (userObj) => {
    console.log("userObj: ", userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers], //spread operator
    });
    // let listUsersCopy = [...this.state.listUsers];
    // listUsersCopy.push(userObj);
    // this.setState({
    //   listUsers: listUsersCopy,
    // });
  };

  //JSX
  render() {
    return (
      <div>
        <UserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfo listUser={this.state.listUsers} />
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
