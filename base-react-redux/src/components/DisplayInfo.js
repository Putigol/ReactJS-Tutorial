import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log("call me constructor");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log("call me componentDidMount");
    setTimeout(() => {
      document.title = "Counter";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("call me componentDidUpdate", this.props, prevProps);
    if (prevProps.listUser !== this.props.listUser) {
      if (this.props.listUser.length === 5) {
        console.log("got 5 users");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    console.log("call me render");
    //Destructuring
    const { listUser } = this.props;
    return (
      <div className="display-info-container">
        <img src={logo} alt="logo" className="img" />
        <div>
          <span onClick={() => this.handleShowHide()}>
            {" "}
            {this.state.isShowListUser === true
              ? "Hide list users"
              : "Show list users"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
