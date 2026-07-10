import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };

  handleShowHide = () => {
    alert("Show list users");
  };
  render() {
    //Destructuring
    const { listUser } = this.props;
    return (
      <div>
        <div>
          <span onClick={() => this.handleShowHide()}> Hide list users: </span>
        </div>
        {true && (
          <div>
            {listUser.map((user, index) => {
              console.log(">>> check user: ", user);
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
              //Dấu + trước biến để ép kiểu dữ liệu sang number
              //   if (+user.age > 30) {
              //     return (
              //       <div key={user.id} className="red">
              //         <div>My name's {user.name}</div>
              //         <div>My age's {user.age}</div>
              //         <hr />
              //       </div>
              //     );
              //   } else {
              // return (
              //   <div key={user.id} className="green">
              //     <div>My name's {user.name}</div>
              //     <div>My age's {user.age}</div>
              //     <hr />
              //   </div>
              // );
              //   }
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
