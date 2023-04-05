import React from "react";

import { IProduct } from "../../types/api";

import { ProductItem, ResultsContainer } from "./styles";

export interface IProducts {
  products: IProduct[];
}

const Results = ({ products }: IProducts) => {
  return (
    <ResultsContainer>
      {products.map(({ name }, index) => (
        <ProductItem key={index}>{name}</ProductItem>
      ))}
    </ResultsContainer>
  );
};

export default Results;
