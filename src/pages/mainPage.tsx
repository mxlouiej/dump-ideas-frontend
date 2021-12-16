import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

import Header from "../components/header";

const MainPage = () => {
  const [data, setData] = useState(0);
  let navigate = useNavigate();

  const fetchPossibilities = async () => {
    await fetch("http://localhost:8000/getPossibilities")
      .then((res) => res.json().then((r) => setData(r.count)))
      .catch((r) => {
        console.log("Error", r);
      });
  };

  useEffect(() => {
    fetchPossibilities();
  }, []);

  return (
    <Container className="main-container d-flex flex-column justify-content-center">
      <Header />

      <Row className="my-md-5">
        <h1 className="big-generate-text">
          I CAN GENERATE <br />
          {data.toLocaleString("en-US")}
          <br /> IDEAS.
        </h1>
      </Row>
      <Row className="flex-column flex-md-row">
        <Col className="pt-4 d-flex d-md-block flex-column justify-content-center">
          <Button
            className="btn-large-bold px-lg-5"
            variant="outline-dark"
            size="lg"
            onClick={() => {
              navigate(`/dump`);
            }}
          >
            DUMP IDEAS
          </Button>
          <h6 className="mt-2">HELP A COLLEAGUE</h6>
        </Col>
        <Col className="pt-4 d-flex d-md-block flex-column justify-content-center">
          <Button
            className="btn-large-bold px-md-5"
            variant="outline-dark"
            size="lg"
            onClick={() => {
              navigate(`/shit`);
            }}
          >
            SHIT IDEAS
          </Button>
          <h6 className="mt-2">HELP YOURSELF</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
