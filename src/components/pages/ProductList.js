import React, { Component } from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "../layout/AppNavBar";
import Footer from "../layout/Footer";
import { Container } from "reactstrap";
import { CardDeck } from "reactstrap";

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
        <Container>
          <CardDeck>
            {this.props.products.map(item => (
              <Item key={item.productID} products={item} />
            ))}
          </CardDeck>
        </Container>
        <Footer />
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
