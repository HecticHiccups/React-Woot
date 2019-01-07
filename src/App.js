/*eslint-disable eqeqeq*/
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import AddProduct from "./components/AddProduct";
//import uuid from "uuid";
import About from "./components/pages/About";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//! Main: Component
//! NoteToSelf: App Level State is handled by Context or Redux
class App extends Component {
  state = {
    home: [],
    isLoading: true
  };

  //Runs when component mounts
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ home: res.data }));
  }
  //passing the id of the home object being checked.
  markComplete = id => {
    console.log(`From App.js ${id}`);
    //calling predefined setState
    this.setState({
      home: this.state.home.map(home => {
        if (home.id == id) {
          home.completed = !home.completed;
        }
        return home;
      })
    });
  };

  //Delete Todo
  //Spread operator used to copy values, then filter to show only
  delProduct = id => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/{id}").then(
      this.setState({
        home: [...this.state.home.filter(home => home.id !== id)]
      })
    );
  };

  //Add Home
  addProduct = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        title,
        completed: false
      })
      .then(res => this.setState({ home: [...this.state.home, res.data] }));
  };

  render() {
    console.log(this.state.home);
    return (
      <Router>
        <div className="App">
          <div className="customContainer">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddProduct addProduct={this.addProduct} />
                  <Home
                    home={this.state.home}
                    markComplete={this.markComplete}
                    delProduct={this.delProduct}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
