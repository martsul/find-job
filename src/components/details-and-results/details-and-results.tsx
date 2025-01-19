import { FC } from "react";
import { Details } from "../details/details";
import { DetailsProps } from "../../types/details";
import { Recomendation } from "../recomendation/recomendation";
import styles from "./details-and-results.module.css";

export const DetailsAndResults: FC<DetailsProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Details data={data} />
      <Recomendation />
    </div>
  );
};
