import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useFilters } from "../context/filters-context/use-filters";
import { JobCards } from "./job-cards";
import { getEmployments } from "../../redux/entities/employments/get-employments";
import { selectEmploymentsFilteredIds } from "../../redux/entities/employments/employments-slice";

export const JobCardsContainer = () => {
  const dispatch = useAppDispatch();
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Error Filters Context");
  }

  const { activeFilters } = filtersData;

  useEffect(() => {
    dispatch(getEmployments());
  }, [dispatch]);

  const ids = useAppSelector((state) =>
    selectEmploymentsFilteredIds(state, activeFilters)
  );

  if (!ids) return;

  return <JobCards ids={ids} />;
};
