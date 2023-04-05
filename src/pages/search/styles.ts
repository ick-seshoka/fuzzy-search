import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #3b3ddd;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SearchInput = styled.input`
  background: transparent;
  width: 550px;
  height: 80px;
  background: #ffffff;
  border-radius: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  outline: none;
  border: none;
  padding: 0 1em;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;
