export type FiltersContextValue = {
  activeFilters: Set<string>;
  addFilter: (filter: string) => void;
  deleteFilter: (filter: string) => void;
  updateFilter: (oldFilter: string, newFilter: string) => void;
};
