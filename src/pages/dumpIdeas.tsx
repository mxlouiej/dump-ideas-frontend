import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Toast from "react-bootstrap/Toast";

import Header from "../components/header";

const DumpIdeas = () => {
  const [word, setWord] = useState("");
  const [wordType, setWordType] = useState("Verb");
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const submitWords = async (word: string, wordType: string) => {
    await fetch("https://dump-ideas-backend.herokuapp.com/addWord", {
      method: "POST",
      body: JSON.stringify({
        word: word.toLowerCase(),
        wordType: wordType,
      }),
    })
      .then((res) => {
        res.json().then((r) => {
          setShowToast(true);
          setMessage(r.message);
          console.log(r);
        });
      })
      .catch((err) => {
        console.log("may error", err);
      });
  };

  return (
    <Container className="main-container d-flex flex-column justify-content-center">
      <Header />

      <Row className="my-5">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWord(e.target.value)
            }
          />

          <DropdownButton
            variant="outline-secondary"
            title={wordType}
            id="input-group-dropdown-2"
            align="end"
          >
            {wordType === "Verb" ? (
              <Dropdown.Item onClick={() => setWordType("Noun")}>
                Noun
              </Dropdown.Item>
            ) : (
              <Dropdown.Item onClick={() => setWordType("Verb")}>
                Verb
              </Dropdown.Item>
            )}
          </DropdownButton>
        </InputGroup>
      </Row>
      <Row>
        <Col>
          <Button
            variant="outline-dark btn-large-bold px-md-5"
            size="lg"
            onClick={() => submitWords(word, wordType)}
            disabled={word ? false : true}
          >
            ADD
          </Button>
        </Col>
      </Row>
      {showToast && (
        <Toast
          show={showToast}
          className="position-absolute toast-alert"
          autohide
          delay={3000}
        >
          <Toast.Header>
            <strong className="me-auto">Alert</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      )}
    </Container>
  );
};

export default DumpIdeas;
