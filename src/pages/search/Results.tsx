import React from "react";

import { IProduct } from "../../types/api";

import { ProductItem, ResultsContainer } from "./styles";

export interface IProducts {
  products: IProduct[];
  setSelectedProduct: (name: string) => () => void;
  onProductHover: (name: string) => () => void;
  onProductUnhover: () => void;
}

const Results = ({
  products,
  setSelectedProduct,
  onProductHover,
  onProductUnhover,
}: IProducts) => {
  return (
    <ResultsContainer>
      {products.map(({ name }, index) => (
        <ProductItem
          onMouseEnter={onProductHover(name)}
          onMouseLeave={onProductUnhover}
          onClick={setSelectedProduct(name)}
          key={index}
        >
          {name}
        </ProductItem>
      ))}
    </ResultsContainer>
  );
};

export default Results;
