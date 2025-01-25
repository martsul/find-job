import { ReactNode, useState } from "react";
import { FiltersContext } from ".";
import {
  FiltersContextValue,
  FiltersTypes,
} from "../../../types/filters-context-data";

export const FiltersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeFilters, setActiveFilters] = useState<
    FiltersContextValue["activeFilters"]
  >({});

  const addFilter = (name: string, type: FiltersTypes) => {
    activeFilters[name] = { name, type };
    setActiveFilters({ ...activeFilters });
  };

  const deleteFilter = (name: string) => {
    delete activeFilters[name];
    setActiveFilters({ ...activeFilters });
  };

  return (
    <FiltersContext.Provider
      value={{ activeFilters: activeFilters, addFilter, deleteFilter }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
