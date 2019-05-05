import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Header.scss';

const Header = () => (
  <Container>
    <Row>
      <Col md="6" lg="3">
        <h1 className="header">Reverse Chat</h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
