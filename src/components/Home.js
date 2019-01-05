import React, { Component } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    console.log(this.props.home);
    return this.props.home.map(home => <Product key={home.id} home={home} />);
  }
}
//propTypes
Home.propTypes = { home: PropTypes.array.isRequired };

export default Home;
