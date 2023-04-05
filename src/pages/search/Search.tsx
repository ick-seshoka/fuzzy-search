import React, { useEffect, useState } from "react";

import Title from "../../components/Title";
import Form from "./Form";
import Results from "./Results";

import { IProduct } from "../../types/api";

import { Container } from "./styles";
import { fetchData } from "../../api/search";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData();
        setProducts(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <Container>
      <Title>Find your product</Title>
      <Form search={search} setSearch={setSearch} />
      {search !== "" && <Results products={products} />}
    </Container>
  );
};

export default Search;
