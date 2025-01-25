import { FiltersTypes } from "./filters-context-data";

export type FilterCard = {
  title: string;
  type: FiltersTypes;
  info: string[];
};

export type DetailsProps = { data: FilterCard[] };
