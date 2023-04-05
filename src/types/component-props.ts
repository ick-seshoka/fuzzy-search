import { SetStateAction } from "react";

export interface IFormProps {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}
