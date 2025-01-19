import { FC } from "react";
import { DollarCircle } from "../../svg/dollar-circle";
import { Location } from "../../svg/location";
import styles from "./post-info.module.css";

type Props = {
  data: {
    title: string;
    company?: string;
    location: string;
    salary: { sum: string; time: string };
    text: string;
  };
};

export const PostInfo: FC<Props> = ({ data }) => {
  const { location, salary, text, title, company } = data;

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
            <strong className={styles.strong}>{salary.sum}</strong> /{" "}
            {salary.time}
          </span>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
