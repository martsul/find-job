import { ReactNode, useState } from "react";
import { FiltersContext } from ".";
import { FiltersContextValue } from "../../../types/filters-context-data";

export const FiltersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeFilters, setActiveFilters] = useState<
    FiltersContextValue["activeFilters"]
  >(new Set(["United States"]));

  const addFilter = (filter: string) => {
    const tempSet = new Set(activeFilters);
    tempSet.add(filter);
    setActiveFilters(tempSet);
  };

  const deleteFilter = (filter: string) => {
    const tempSet = new Set(activeFilters);
    tempSet.delete(filter);
    setActiveFilters(tempSet);
  };

  const updateFilter = (oldFilter: string, newFilter: string) => {
    const tempSet = new Set(activeFilters);
    tempSet.delete(oldFilter);
    tempSet.add(newFilter);
    setActiveFilters(tempSet);
  };

  return (
    <FiltersContext.Provider
      value={{
        activeFilters: activeFilters,
        addFilter,
        deleteFilter,
        updateFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
