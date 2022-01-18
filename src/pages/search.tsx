import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import SearchResult from "../components/searchResult";

type Props = {
  word: string;
  setEdit: React.Dispatch<React.SetStateAction<any>>;
  setWord: React.Dispatch<React.SetStateAction<any>>;
  setID: React.Dispatch<React.SetStateAction<any>>;
  setWordType: React.Dispatch<React.SetStateAction<any>>;
};

const Search = ({ setEdit, word, setWord, setID, setWordType }: Props) => {
  const [result, setResult] = useState<any[]>([]);

  const searchWord = async (word: string) => {
    await fetch(`https://dump-ideas-backend.herokuapp.com/searchWord/${word}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setResult(data.results);
      });
  };
  return (
    <>
      <Row className="flex-column">
        <Col>
          <p className=" text-end mb-0">
            {result.length > 0 && `${result.length} Found`}
          </p>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWord(e.target.value)
              }
            />
          </InputGroup>
        </Col>
        <Col>
          <Button
            variant="outline-dark btn-large-bold px-md-5"
            size="lg"
            onClick={() => searchWord(word.toLowerCase())}
            disabled={word ? false : true}
          >
            SEARCH
          </Button>
        </Col>
      </Row>
      <Row
        className={`mt-4 overflow-auto justify-content-center ${
          result.length > 6 ? `h-50` : ``
        }`}
      >
        {result &&
          result.map((item, key) => (
            <SearchResult
              key={key}
              id={item._id.$oid}
              word={item.word}
              wordType={item.wordType}
              setEdit={setEdit}
              setWord={setWord}
              setID={setID}
              setWordType={setWordType}
            />
          ))}
      </Row>
    </>
  );
};

export default Search;
