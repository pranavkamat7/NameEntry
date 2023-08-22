import React, { useState } from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uname, uage) => {
    setUserList((prevValue) => {
      return [
        ...prevValue,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
