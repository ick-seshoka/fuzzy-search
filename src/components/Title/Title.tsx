import React from "react";

import { IChildren } from "../../types/common";

import { TitleText } from "./styles";

const Title = ({ children }: IChildren) => {
  return <TitleText>{children}</TitleText>;
};

export default Title;
