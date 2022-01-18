import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

type Props = {
  id: string;
  word: string;
  wordType: string;
  setEdit: React.Dispatch<React.SetStateAction<any>>;
  setWord: React.Dispatch<React.SetStateAction<any>>;
  setID: React.Dispatch<React.SetStateAction<any>>;
  setWordType: React.Dispatch<React.SetStateAction<any>>;
};

const SearchResult = ({
  id,
  word,
  wordType,
  setEdit,
  setWord,
  setID,
  setWordType,
}: Props) => {
  return (
    <Row className=" border-bottom py-3">
      <Col xs={9} md={6} className="d-md-flex justify-content-between">
        <h5 className="mb-0 bold-text text-decoration-underline text-uppercase">
          {word}
        </h5>
        <h5 className="mb-0 text-uppercase">{wordType}</h5>
      </Col>
      <Col className="d-flex justify-content-center">
        <Button
          variant="outline-dark btn-bold px-md-5"
          onClick={() => {
            setEdit(true);
            setWord(word);
            setID(id);
            setWordType(wordType);
          }}
        >
          EDIT
        </Button>
      </Col>
    </Row>
  );
};

export default SearchResult;
