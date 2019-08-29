import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

//In hooks state is overidden unlike setState where other components of the state persists

const AppHooks = props => {
  const [personsState, setPersonsState] = useState({
    persons: [{ name: "Akash", age: "21" }, { name: "Akshay", age: "21" }]
  });

//   const [otherState, setOtherState] = useState({
//     otherState: "Other State"
//   });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Akash Mane", age: "21" },
        { name: "Akshay Mane", age: "21" }
      ]
    });
  };
  return (
    <div className="App">
      <h1>Using Hooks</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hobbies:Reading
      </Person>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
};

export default AppHooks;
