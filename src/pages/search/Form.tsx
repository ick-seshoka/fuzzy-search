import React from "react";
import { IFormProps } from "../../types/component-props";

import { SearchForm, SearchInput } from "./styles";

const Form = ({ search, setSearch }: IFormProps) => {
  return (
    <SearchForm>
      <SearchInput
        name="search"
        type="search"
        value={search}
        onChange={setSearch}
        placeholder="Start typing here to search ..."
      />
    </SearchForm>
  );
};

export default Form;
