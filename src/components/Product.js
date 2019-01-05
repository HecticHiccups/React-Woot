import React, { Component } from "react";
import PropTypes from "prop-types";

export class Product extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            name="isComplete"
            id="isComplete"
            onChange={this.markComplete}
          />
          {this.props.home.title}
        </p>
      </div>
    );
  }
}
//propTypes
Product.propTypes = { home: PropTypes.object.isRequired };

export default Product;
