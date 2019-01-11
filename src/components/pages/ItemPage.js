import React, { Component } from "react";
import Footer from "../layout/Footer";
import AppNavBar from "../layout/AppNavBar";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
export default class ItemPage extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    axios.get(`api/products/${params.productID}`);
  }
  render() {
    return (
      <div>
        <AppNavBar />
        <Container>
          <Row>
            <Col>Yer</Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
