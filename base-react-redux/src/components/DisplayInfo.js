import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";
import { useState } from "react";

const DisplayInfo = (props) => {
  //Viết function component ko dùng this (dùng trong class)
  const { listUser } = props;
  const [isShowHideListUser, setIsShowHideListUser] = useState(true);
  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="display-info-container">
      <img src={logo} alt="logo" className="img" />
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUser.map((user, index) => {
            return (
              <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                <div>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfo;
