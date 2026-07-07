//Class component
//function component
import React from "react";
class MyComponent extends React.Component {
  //render: tập hợp các nguyên liệu raw, hiển thị thành interface
  //JSX: cho phép viết HTML trong JS, nhưng phải có 1 thẻ bao ngoài
  //Hạn chế của JSX: chỉ có thể render 1 thẻ.
  render() {
    return (
      <div>
        Hello World! This is a simple React Redux counter application
        {/*{} báo hiệu viết JS logic */}
        {Math.random()}
      </div>
    );
  }
}

//Xuất component ra ngoài để sử dụng
export default MyComponent;
