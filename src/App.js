import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Akash", age: "21" }, { name: "Akshay", age: "21" }],
    otherState:"Other State"
  };
  switchNameHandler = () => {
    console.log("was clicked!");
    this.setState({
      persons: [
        { name: "Akash Mane", age: "21" },
        { name: "Akshay Mane", age: "21" }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Without using Hooks</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies:Reading
        </Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );
  }
}

export default App;
