import React, { Component } from "react";
import PropTypes from "prop-types";

//!Note: Components must be named with Capitals
class AddProduct extends Component {
  state = {
    title: ""
  };

  //!Component Level State
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbit = e => {
    e.preventDefault();
    this.props.addProduct(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSumbit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="add Todo..."
          style={{ flex: "10", padding: "5px" }}
          value={title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}
AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};
export default AddProduct;
