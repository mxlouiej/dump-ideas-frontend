import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import Header from "../components/header";
import Search from "./search";
import Edit from "./edit";

const Admin = () => {
  const [id, setID] = useState("");
  const [word, setWord] = useState("");
  const [wordType, setWordType] = useState("");
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Container className="main-container d-flex flex-column justify-content-center">
      <Header />
      {edit ? (
        <Edit word={word} wordType={wordType} id={id} setEdit={setEdit} />
      ) : (
        <Search
          word={word}
          setID={setID}
          setWordType={setWordType}
          setWord={setWord}
          setEdit={setEdit}
        />
      )}
    </Container>
  );
};

export default Admin;
