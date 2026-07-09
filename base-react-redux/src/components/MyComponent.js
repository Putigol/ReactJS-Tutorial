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
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUser={this.state.listUsers} />
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
