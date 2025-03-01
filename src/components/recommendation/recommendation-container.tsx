import { selectEmploymentsFilteredIds } from "../../redux/entities/employments/employments-slice.ts";
import { Recommendation } from "./recommendation.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { useEffect } from "react";
import { getEmployments } from "../../redux/entities/employments/get-employments.ts";
import { useFilters } from "../context/filters-context/use-filters.ts";

export const RecommendationContainer = () => {
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

  return <Recommendation ids={ids} />;
};
