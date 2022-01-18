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

type Props = {
  id: string;
  word: string;
  wordType: string;
  setEdit: React.Dispatch<React.SetStateAction<any>>;
  setWord: React.Dispatch<React.SetStateAction<any>>;
  setWordType: React.Dispatch<React.SetStateAction<any>>;
};

const Edit = ({ id, word, wordType, setEdit, setWord, setWordType }: Props) => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const editWord = async (id: string, word: string, wordType: string) => {
    await fetch("https://dump-ideas-backend.herokuapp.com/editWord", {
      method: "POST",
      body: JSON.stringify({
        oid: id,
        newWord: word,
        wordType: wordType,
      }),
    })
      .then((res) => {
        res.json().then((r) => {
          setShowToast(true);
          setMessage("Edited successfully");
          setTimeout(() => setEdit(false), 3000);
          console.log(r);
        });
      })
      .catch((err) => {
        console.log("may error", err);
      });
  };

  const deleteWord = async (id: string, wordType: string) => {
    await fetch("https://dump-ideas-backend.herokuapp.com/deleteWord", {
      method: "POST",
      body: JSON.stringify({
        oid: id,
        wordType: wordType,
      }),
    })
      .then((res) => {
        res.json().then((r) => {
          setShowToast(true);
          setMessage("Deleted successfully");
          setEdit(false);
          console.log(r);
        });
      })
      .catch((err) => {
        console.log("may error", err);
      });
  };

  return (
    <Container>
      <Row className="flex-column">
        <Col className="d-flex flex-start my-5">
          <Button
            variant="outline-dark btn-bold"
            onClick={() => setEdit(false)}
          >
            &lt; BACK
          </Button>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input with dropdown button"
              value={word}
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
              {wordType === "verb" ? (
                <Dropdown.Item onClick={() => setWordType("noun")}>
                  Noun
                </Dropdown.Item>
              ) : (
                <Dropdown.Item onClick={() => setWordType("verb")}>
                  Verb
                </Dropdown.Item>
              )}
            </DropdownButton>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="outline-dark btn-large-bold px-md-5"
            size="lg"
            onClick={() => editWord(id, word, wordType)}
            disabled={word ? false : true}
          >
            UPDATE
          </Button>
        </Col>
        <Col>
          <Button
            variant="outline-dark btn-large-bold px-md-5"
            size="lg"
            onClick={() => deleteWord(id, wordType)}
            disabled={word ? false : true}
          >
            DELETE
          </Button>
        </Col>
      </Row>
      {showToast && (
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
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

export default Edit;
