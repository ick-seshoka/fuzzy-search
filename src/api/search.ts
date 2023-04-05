import { IProduct } from "../types/api";

export const fetchData = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(
      "https://gitlab.com/-/snippets/2371235/raw/main/json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const rawData = await response.text();
    const parsedData: IProduct[] = JSON.parse(rawData);

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
