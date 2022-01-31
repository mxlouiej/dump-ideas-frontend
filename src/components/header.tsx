import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuth } from "./authProvider";

const Header = () => {
  const { localUser, onLogout } = useAuth();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-black">
            <h2 className="bold-text">DUMP!</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        {localUser && (
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-dark" onClick={onLogout}>
              {" "}
              Logout{" "}
            </Button>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
