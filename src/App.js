/*eslint-disable eqeqeq*/
//import Home from "./components/Home";
//import AddProduct from "./components/AddProduct";
//import uuid from "uuid";
//import Header from "./components/layout/Header";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import ProductList from "./components/pages/ProductList";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//! Main: Component
//! NoteToSelf: App Level State is handled by Context or Redux
class App extends Component {
  state = {
    products: [],
    isLoading: true
  };

  async getProducts() {
    const res = await axios("/api/products");
    return await res.data;
  }

  //Runs when component mounts
  async componentDidMount() {
    const body = await this.getProducts();
    this.setState({ products: body, isLoading: false });
    //Outputting async request
    console.log(this.state.products);
    console.log(`Products: ${JSON.stringify(this.state.products)}`);
  }
  //passing the id of the home object being checked.
  markComplete = id => {
    //calling predefined setState
    this.setState({
      products: this.state.products.map(product => {
        if (product.id == id) {
          product.completed = !this.state.products.completed;
        }
        return product;
      })
    });
  };

  //Delete Todo
  //Spread operator used to copy values, then filter to show only
  delProduct = id => {
    axios.delete("/api/product/{id}").then(
      this.setState({
        products: [...this.state.products.filter(product => product.id !== id)]
      })
    );
  };

  //Add Home
  addProduct = title => {
    axios
      .post("api/product", {
        title,
        completed: false
      })
      .then(res =>
        this.setState({ products: [...this.state.products, res.data] })
      );
  };

  render() {
    console.log("this:" + this.state.products);
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/all"
            render={() => <ProductList products={this.state.products} />}
          />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
