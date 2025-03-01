import { useCallback, useEffect, useState } from "react";
import { useFilters } from "../context/filters-context/use-filters";

export const useChangeCity = () => {
  const [city, setCity] = useState("United States");
  const filtersData = useFilters();

  if (!filtersData) {
    throw new Error("Error Filters Context");
  }

  const { updateFilter } = filtersData;

  const changeCity: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    const target = event.target;

    if (target instanceof HTMLElement) {
      const currentCity = target.id;

      updateFilter(city, currentCity);

      setCity(() => currentCity);
    }
  };

  return { city, changeCity };
};

export const useChangeVisible = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = useCallback(() => {
    setVisible((value) => !value);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isVisible, handleClick]);

  const changeVisible: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setVisible((value) => !value);
  };

  return { isVisible, changeVisible };
};
