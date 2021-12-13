import React from "react";

type Props = {
  word: string;
  className: string;
  state: boolean;
  onClick: React.Dispatch<React.SetStateAction<any>>;
};

const WordState = ({ word, className, state, onClick }: Props) => {
  return (
    <span className=" position-relative">
      <span className={`${className}`} onClick={onClick}>
        {word ? word : "WORD"}
      </span>
      <legend className={`sub-text ${state ? "locked-text" : "unlocked-text"}`}>
        {state ? "locked" : "lock"}
      </legend>
    </span>
  );
};

export default WordState;
