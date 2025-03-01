import { FC } from "react";
import { Details } from "../details/details";
import { DetailsProps } from "../../types/details";
import styles from "./details-and-results.module.css";
import { RecommendationContainer } from "../recommendation/recommendation-container";

export const DetailsAndResults: FC<DetailsProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Details data={data} />
      <RecommendationContainer />
    </div>
  );
};
