import  Card  from "../Ul/Card"
import React from 'react'
import classes from "./UserList.module.css"

function UserList(props) {
 function getBackgroundColor(age){
  if (age >= 60) {
    return 'green';
  } else if (age >= 18 && age <= 59) {
    return 'blue';
  } else {
    return 'yellow';
  }
 }
  return (
    <Card className={classes.users}>
  <ul>
{props.users.map((user)=>(
<li key={user.id}
style={{ backgroundColor: getBackgroundColor(user.age) }}>
    {user.name} ({user.age} years old.)

</li>))}
  </ul>
    </Card>
  )
}

export default UserList
