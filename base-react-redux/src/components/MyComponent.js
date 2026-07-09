//Class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo name="Phú Thịnh" age={30} />
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
