import { SetStateAction } from "react";

export interface IFormProps {
  search: string;
  setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
