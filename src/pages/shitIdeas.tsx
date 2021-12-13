import React, { useCallback, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "../components/header";
import WordState from "../components/wordState";

const ShitIdeas = () => {
  const [verb, setVerb] = useState({
    word: "",
    locked: false,
  });
  const [noun, setNoun] = useState({
    word: "",
    locked: false,
  });
  const [product, setProduct] = useState({
    word: "",
    locked: false,
  });

  const fetchRandomVerb = async () => {
    await fetch("http://localhost:8000/getRandomVerb")
      .then((res) => res.json().then((r) => setVerb({ ...verb, word: r.verb })))
      .catch((r) => {
        console.log("Error", r);
      });
  };
  const fetchRandomNoun = async () => {
    await fetch("http://localhost:8000/getRandomNoun")
      .then((res) => res.json().then((r) => setNoun({ ...noun, word: r.noun })))
      .catch((r) => {
        console.log("Error", r);
      });
  };
  const fetchRandomProduct = async () => {
    await fetch("http://localhost:8000/getProduct")
      .then((res) =>
        res.json().then((r) => {
          setProduct({ ...product, word: r.product });
        })
      )
      .catch((r) => {
        console.log("Error", r);
      });
  };

  const generateIdea = useCallback(() => {
    if (!verb.locked) {
      fetchRandomVerb();
    }
    if (!noun.locked) {
      fetchRandomNoun();
    }
    if (!product.locked) {
      fetchRandomProduct();
    }
  }, [verb.locked, noun.locked, product.locked]);

  useEffect(() => {
    generateIdea();
  }, []);
  return (
    <Container className="main-container d-flex flex-column justify-content-center">
      <Header />
      <Row className="big-text text-uppercase text-break d-inline-block statement-text">
        A
        <WordState
          word={product.word}
          className="highlight-word"
          state={product.locked}
          onClick={() =>
            setProduct({
              ...product,
              locked: !product.locked,
            })
          }
        />{" "}
        THAT
        <br />
        <WordState
          word={verb.word}
          className="highlight-word"
          state={verb.locked}
          onClick={() =>
            setVerb({
              ...verb,
              locked: !verb.locked,
            })
          }
        />{" "}
        <WordState
          word={noun.word}
          className="highlight-word"
          state={noun.locked}
          onClick={() =>
            setNoun({
              ...noun,
              locked: !noun.locked,
            })
          }
        />{" "}
      </Row>
      <Row>
        <Col>
          <Button
            className="mt-4 btn-large-bold"
            variant="outline-dark"
            size="lg"
            onClick={() => generateIdea()}
          >
            AGAIN?
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ShitIdeas;
