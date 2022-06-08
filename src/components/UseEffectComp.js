import React, { useState, useEffect } from "react";
//* Her renderda calisir.
// useEffect(() => {
//   console.log('UseEffect!');
// });

//* Ilk renderda, bir kere calisir.

//* Sadece count degiskeni degistiginde calisir.

//* Hem count, hem de age degiskeni degistiginde calisir.

const UseEffectComp = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  useEffect(() => {
    console.log("useEffect!");
    let timer = setTimeout(() => {
      alert("hello, bad guy");
    }, 3000);
    return () => {
      console.log("Func Comp Unmounted");
      clearTimeout(timer);
    };
  }, []);
  // boş bağımlılık değişkeni atanırsa sadece ilk renderda çalışır.
  // dolu verilirse verilen değerlerdeki her değişiklik için tekrar çalışır.
  // hiç verilmezse her defasında render olur.
  console.log("Func Comp Rendered!");

  const increase = () => setCount(count + 1);
  const increaseAge = () => setAge(age + 1);

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count: {count} </p>
      <button onClick={increase}>Increase Count</button>
      <p>Age: {age} </p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default UseEffectComp;
