import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Item extends Component {
  componentDidMount = () => {
    console.log("Stuff: " + this.props.products);
  };

  render() {
    console.log(this.props.products);
    const {
      productName: Name,
      productDescription: Description,
      productPrice: Price
    } = this.props.products;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{Name}</CardTitle>
                  <CardSubtitle>{Price}</CardSubtitle>
                  <CardText>{Description}</CardText>
                  <Link className="btn btn-primary" to="/product/{id}">
                    See More
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
Item.propTypes = {
  products: PropTypes.object.isRequired
};

export default Item;
