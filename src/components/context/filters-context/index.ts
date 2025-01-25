import { createContext } from "react";
import { FiltersContextValue } from "../../../types/filters-context-data";



export const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined
);
