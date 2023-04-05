import React from "react";
import { IFormProps } from "../../types/component-props";

import { SearchForm, SearchInput } from "./styles";

const Form = ({ search, setSearch }: IFormProps) => {
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <SearchForm>
      <SearchInput
        type="text"
        value={search}
        onChange={changeSearch}
        placeholder="Start typing here to search ..."
      />
    </SearchForm>
  );
};

export default Form;
