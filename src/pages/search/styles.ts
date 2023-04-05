import styled from "styled-components";

import BackgroundIconSource from "../../assets/background-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #3b3ddd;
  align-items: center;
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

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 460px;
  max-height: 420px;
  background: rgba(255, 255, 255, 0.86);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 1em;
  overflow-y: scroll;
  position: fixed;
  top: 13em;
`;

export const ProductItem = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;

  :hover {
    opacity: 0.35;
  }
`;

export const SelectedProduct = styled.h3`
  font-weight: 500;
  font-size: 3em;
  line-height: 75px;
  color: #ffffff;
  text-align: center;
`;

export const Label = styled.p`
  font-size: 2em;
  color: #ffffff;
`;

export const ErrorLabel = styled.p`
  font-size: 2em;
  color: #ff0000;
`;

export const BackgroundIcon = styled.img.attrs({ src: BackgroundIconSource })`
  width: 487px;
  position: fixed;
  left: -10px;
  top: 400px;
`;
