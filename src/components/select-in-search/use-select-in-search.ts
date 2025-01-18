import { useCallback, useEffect, useState } from "react";

export const useChangeCity = () => {
  const [city, setCity] = useState("United States");

  const changeCity: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    const target = event.target;

    if (target instanceof HTMLElement) {
      const currentCity = target.id;
      setCity(currentCity);
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
