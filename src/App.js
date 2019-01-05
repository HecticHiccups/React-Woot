import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  state = {
    home: [
      {
        id: 1,
        title: "Meet with boss.",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife.",
        completed: true
      },
      {
        id: 3,
        title: "take out the trash.",
        completed: false
      }
    ]
  };

  render() {
    console.log(this.state.home);
    return (
      <div className="App">
        <Home home={this.state.home} />
      </div>
    );
  }
}

export default App;
