import React, { Component } from "react";
import AppNavBar from "../layout/AppNavBar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Container fluid>
          <Button color="primary">
            <Link to="/all">See More..</Link>
          </Button>
        </Container>
      </div>
    );
  }
}
export default HomePage;
