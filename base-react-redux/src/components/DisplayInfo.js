import React from "react";

class DisplayInfo extends React.Component {
  render() {
    //Destructuring
    const { listUser } = this.props;
    return (
      //
      <div>
        <div>DisplayInfo</div>
        {listUser.map((user) => (
          <div key={user.id}>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <hr />
          </div>
        ))}
        <hr />
      </div>
    );
  }
}

export default DisplayInfo;
