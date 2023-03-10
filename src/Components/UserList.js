import classes from "./UserList.module.css";

import Card from "./Card";
const UserList = (props) => {
  console.log(props.items);
  return (
    <Card className={classes.user}>
      <ul>
        {props.items.map((item) => (
          <li>
            {item.name} ({item.age} years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
