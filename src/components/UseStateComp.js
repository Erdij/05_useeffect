import React from "react";
import { useState } from "react";
//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.
const UseStateComp = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(4);
  const [user, setUser] = useState({
    name: "Erdijx",
    age: "29",
    email: "erdijx@gmail.com",
  });

  const increase = () => setCount((count) => count + 1); //setCount'ın içi (count + 1) de olabilir
  const increaseAge = () => setAge(age + 1); //yukarıdaki arrow ile aynı
  const updateUser = () => setUser({ ...user, name: "Mihri" });
  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count : {count}</p>
      <button onClick={increase}>Increase Count</button>
      <p> Age : {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>Email : {user.email}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default UseStateComp;
