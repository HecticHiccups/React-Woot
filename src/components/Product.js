import React, { Component } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

//TODO:items Component.
//This is part of the component class.
/*eslint-disable eqeqeq*/

export class Product extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.home.completed ? "line-through" : "none"
    };
  };
  //In arrow functions, the of 'this' is consistent.

  render() {
    //Destructuring Object properties from home.
    const { id, title } = this.props.home;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            name="isComplete"
            id="isComplete"
            onChange={this.props.markComplete.bind(this, id)} //When box state changes(checked), set this property.
          />
          {title}
          <button
            onClick={this.props.delProduct.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
//propTypes, Home is intepreted as an Object in order to retrieve Obj properties.
Product.propTypes = { home: PropTypes.object.isRequired };

const btnStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

//Necessary to establish the props for each Component
Product.propTypes = {
  home: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delElement: PropTypes.func.isRequired
};

export default Product;
