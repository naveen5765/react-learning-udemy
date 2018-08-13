import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 30 },
      { name: "Stephanie", age: 26 }
    ]
  };

  switchNameHandler = (newName, age = 22) => {
    this.setState({
      persons: [
        { name: newName, age: age },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  nameChangedHandler = (event, age = 22) => {
    this.setState({
      persons: [
        { name: "Max", age: age },
        { name: event.target.value, age: 30 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  render() {
    const switchButtonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "18px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> Hi, I am a React App </h1>
        <button
          onClick={() => this.switchNameHandler("Naveen")} // Avoid using this syntax to pass params
          style={switchButtonStyle}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maximilian", "26")} // This is the preferred way of passing params.
          change={this.nameChangedHandler}
        >
          My Hobbies : Gaming
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    /* return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hi, I am a React App !!!")
    ); */
  }
}

export default App;
