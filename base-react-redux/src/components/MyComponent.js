//Class component
//function component
import React from "react";
import UserInfo from "./UserInfo";
class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
