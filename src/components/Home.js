import React, { Component } from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

//TODO Component:
/*eslint-disable eqeqeq*/
class Home extends Component {
  render() {
    console.log(this.props.home);
    return this.props.home.map(home => (
      <Product
        key={home.id}
        home={home}
        markComplete={this.props.markComplete} //setting props markComplete.
        delProduct={this.props.delProduct}
      />
    ));
  }
}
//propTypes set to Home property, with props interpreted as an Array
Home.propTypes = {
  home: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delElement: PropTypes.func.isRequired
};

export default Home;
