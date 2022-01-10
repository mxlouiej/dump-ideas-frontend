import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";

type Props = {
  word: string;
  className: string;
  state: boolean;
  onClick: React.Dispatch<React.SetStateAction<any>>;
  setWord: React.Dispatch<React.SetStateAction<any>>;
};

const WordState = ({ word, className, state, onClick, setWord }: Props) => {
  return (
    <Col className="position-relative">
      {/* <span className={`${className}`}>{word ? word : "WORD"}</span> */}

      <FormControl
        className={`${className} statement-input`}
        value={word ? word : ""}
        disabled={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWord(e.target.value)
        }
      />
      <legend
        onClick={onClick}
        className={`sub-text ${state ? "locked-text" : "unlocked-text"}`}
      >
        {state ? "locked" : "lock"}
      </legend>
    </Col>
  );
};

export default WordState;
