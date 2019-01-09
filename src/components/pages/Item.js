import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class Item extends Component {
  render() {
    const {
      productName: Name,
      productDescription: Description,
      productPrice: Price
    } = this.props.products;
    return (
      <div>
        <Container>
          <Row>
            <Col xs="6" sm="6" md={{ size: 6, offset: 3 }}>
              <CardDeck>
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
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </CardDeck>
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
