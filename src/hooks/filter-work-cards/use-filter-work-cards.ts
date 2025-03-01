// import { worksCards } from "../../mock/works-cards/work";
import { FiltersContextValue } from "../../types/filters-context-data";
import { jobCardData } from "../../types/job-card-data";

const memory = new Map();

export const useFilterWorkCards = (
  filters: FiltersContextValue["activeFilters"]
): jobCardData[] => {
  if (memory.has(filters)) {
    return memory.get(filters);
  }

  const filteredData = worksCards.filter((element) => {
    let thereIsMistakes = false;

    for (const key in filters) {
      const { name, type } = filters[key];
      const elementFiltersValue = element.filtersInfo[type];

      if (name !== elementFiltersValue) {
        thereIsMistakes = true;
        break;
      }
    }

    return !thereIsMistakes;
  });

  memory.set(filters, filteredData);
  return filteredData;
};
