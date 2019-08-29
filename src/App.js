import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Akash", age: "21" }, { name: "Akshay", age: "21" }],
    otherState: "Other State"
  };
  switchNameHandler = newName => {
    console.log("was clicked!");
    this.setState({
      persons: [
        { name: newName, age: "21" },
        { name: "Akshay Mane", age: "21" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Akash", age: "21" },
        { name: event.target.value, age: "21" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor:"pink",
      border:"1px solid #eee",
      padding:"16px"
    }
    return (
      <div className="App">
        <h1>Without using Hooks</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler.bind(this, "Akash Mane")}
          changed={this.nameChangedHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Hobbies:Reading
        </Person>
        <button style={style} onClick={() => this.switchNameHandler("Akash Mane")}>Switch Name</button>
        {/* //Can cause performance issue in big apps */}
      </div>
    );
  }
}

export default App;
