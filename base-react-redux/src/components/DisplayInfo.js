import React from "react";
import "./DisplayInfo.scss";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //Destructuring
    const { listUser } = this.props;
    return (
      <div className="display-info-container">
        <div>
          <span onClick={() => this.handleShowHide()}>
            {" "}
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
