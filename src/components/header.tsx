import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row className=" fixed-top dump-header">
      <Link to="/" className="text-decoration-none text-black">
        <h2 className="bold-text">DUMP!</h2>
      </Link>
    </Row>
  );
};

export default Header;
