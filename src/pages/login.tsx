import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import { useAuth } from "../components/authProvider";

const Login = () => {
  const { onLogin } = useAuth();
  const [password, setPassword] = useState("");

  return (
    <Container className="main-container d-flex flex-column justify-content-center">
      <Row className="my-md-5">
        <h1 className="big-generate-text">ADMIN LOGIN</h1>
      </Row>
      <Row>
        <Col>
          <FormControl
            aria-label="Text input for password"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="ENTER PASSWORD"
            onKeyPress={(e: React.KeyboardEvent) => onLogin(e, password)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
