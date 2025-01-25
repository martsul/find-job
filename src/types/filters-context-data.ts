export type FiltersContextValue = {
  activeFilters: Record<string, { name: string; type: FiltersTypes }>;
  addFilter: (filter: string, type: FiltersTypes) => void;
  deleteFilter: (filter: string) => void;
};

export type FiltersTypes = "experience" | "type" | "location";
