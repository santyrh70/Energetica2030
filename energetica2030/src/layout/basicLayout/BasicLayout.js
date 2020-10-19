import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeftMenu from "../../components/leftMenu/LeftMenu.js";

import "./BasicLayout.scss";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <Container className="basic-layout">
      <Row className="basic-layout__body">
        <Col className="basic-layout__menu">
          <LeftMenu></LeftMenu>
        </Col>
        <Col className="basic-layout__content">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
