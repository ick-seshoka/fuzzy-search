import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";

import Title from "../../components/Title";
import Form from "./Form";
import Results from "./Results";

import { IProduct } from "../../types/api";
import { fetchData } from "../../api/search";
import { fuseOptions } from "../../enums";

import { Container, SelectedProduct } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([] as IProduct[]);
  const [results, setResults] = useState([] as IProduct[]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [previewProduct, setPreviewProduct] = useState("");

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

  useEffect(() => {
    const fuse = new Fuse(products, fuseOptions);

    if (search.trim()) {
      const result = fuse.search(search);
      setResults(result.map((res) => res.item));
    } else {
      setResults([] as IProduct[]);
    }
  }, [search]);

  const handleSelectProduct = (name: string) => () => {
    setSelectedProduct(name);
    setSearch("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onProductHover = (name: string) => () => {
    setPreviewProduct(name);
  };

  const onProductUnhover = () => {
    setPreviewProduct("");
  };

  return (
    <Container>
      <Title>Find your product</Title>
      <Form
        search={previewProduct !== "" ? previewProduct : search}
        setSearch={handleSearch}
      />
      {search !== "" && (
        <Results
          products={results}
          setSelectedProduct={handleSelectProduct}
          onProductHover={onProductHover}
          onProductUnhover={onProductUnhover}
        />
      )}
      {selectedProduct !== "" && (
        <SelectedProduct>{selectedProduct}</SelectedProduct>
      )}
    </Container>
  );
};

export default Search;
