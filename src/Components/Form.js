import classes from "./Form.module.css";
import Button from "./Button";
import Card from "./Card";

import { useState } from "react";
const Form = (props) => {
  const [username, setUsername] = useState(" ");
  const [age, setAge] = useState(" ");
  const userHandler = (e) => {
    setUsername(e.target.value);
    // console.log("Hii");
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
    // console.log(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }

    props.onSaveFormData(username, age);

    setUsername("");
    setAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input value={username} type="text" onChange={userHandler} />
        <label>Age</label>
        <input value={age} type="number" onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default Form;
