import classes from "./Form.module.css";
import Button from "./Button";
import Card from "./Card";
import ErrorModel from "./ErrorModel";

import { useState } from "react";
const Form = (props) => {
  const [username, setUsername] = useState(" ");
  const [age, setAge] = useState(" ");
  const [error, setError] = useState();
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
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    props.onSaveFormData(username, age);

    setUsername("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input value={username} type="text" onChange={userHandler} />
          <label>Age</label>
          <input value={age} type="number" onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default Form;
