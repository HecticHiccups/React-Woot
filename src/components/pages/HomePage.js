import React, { Component } from "react";
import AppNavBar from "../layout/AppNavBar";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "../layout/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Container fluid>
          <Link className="btn btn-primary" to="/all">
            See More..
          </Link>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default HomePage;
