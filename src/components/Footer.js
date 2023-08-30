
import React from "react";
import { Row, Col } from '@themesberg/react-bootstrap';

const Footer = (props) => {

  return (
    <div>
      <footer className="footer own-footer">
        <Row>
          <Col xs={12} lg={6} className="mb-lg-0">
            <p className="mb-0 text-xl-left">
              2023 ©Chain
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Footer;
