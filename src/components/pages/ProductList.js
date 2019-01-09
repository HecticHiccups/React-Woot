import React, { Component } from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "../layout/AppNavBar";

/**
 * ProductList Component:
 * Iterates through all products passed from state.
 *
 */
class ProductList extends Component {
  render() {
    console.log(this.props.products);

    return (
      <div>
        <AppNavBar />
        {this.props.products.map(item => (
          <Item key={item.productID} products={item} />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
