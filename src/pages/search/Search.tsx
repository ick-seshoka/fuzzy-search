import React, { useState } from "react";

import Title from "../../components/Title";
import Form from "./Form";

import { Container } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Title>Find your product</Title>
      <Form search={search} setSearch={setSearch} />
    </Container>
  );
};

export default Search;
