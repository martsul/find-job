import { FC } from "react";
import { DollarCircle } from "../../svg/dollar-circle";
import { Location } from "../../svg/location";
import styles from "./post-info.module.css";
import { jobCardData } from "../../types/job-card-data";

type Props = {
  data: jobCardData;
};

export const PostInfo: FC<Props> = ({ data }) => {
  const { location, salary, workTime, text, title, company } = data;

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.block}>
        {company && <span className={styles.company}>{company}</span>}
        <div className={styles.textSvg}>
          <span className={styles.location}>
            <Location color="#7F879E" />
          </span>
          <span className={styles.name}>{location}</span>
        </div>
        <div className={styles.textSvg}>
          <span className={styles.dollar}>
            <DollarCircle />
          </span>
          <span className={styles.name}>
            <strong className={styles.strong}>{salary}</strong> / {workTime}
          </span>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
