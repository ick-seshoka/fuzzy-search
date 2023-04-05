import React, { useState } from "react";

import Title from "../../components/Title";
import Form from "./Form";
import Results from "./Results";

import { IProduct } from "../../types/api";

import { Container } from "./styles";

const DUMMY_DATA: IProduct[] = [
  {
    amountUnit: "st",
    amountValue: 10,
    pzn: "05138849",
    name: "ib-u-ron 75 mg 10 Zäpfchen N1",
    strengthUnit: "MG",
    strengthValue: 75,
  },
  {
    amountUnit: "st",
    amountValue: 10,
    pzn: "05138915",
    name: "ib-u-ron 150 mg 10 Zäpfchen N1",
    strengthUnit: "MG",
    strengthValue: 150,
  },
  {
    amountUnit: "st",
    amountValue: 20,
    pzn: "14141365",
    name: "Ibu - 1 A Pharma® Grippal 200 mg/30 mg 20 Filmtabletten N1",
    strengthUnit: "MG",
    strengthValue: 200,
  },
];

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Title>Find your product</Title>
      <Form search={search} setSearch={setSearch} />
      {search !== "" && <Results products={DUMMY_DATA} />}
    </Container>
  );
};

export default Search;
