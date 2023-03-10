// import logo from "./logo.svg";
import Form from "./Components/Form";
import UserList from "./Components/UserList";
import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const saveFormData = (uName, uAge) => {
    setUserData((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log(uName, uAge);
  };

  return (
    <div className="App">
      <Form onSaveFormData={saveFormData} />
      <UserList items={userData} />
    </div>
  );
}

export default App;
