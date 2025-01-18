import { ArrowLeft } from "../../../svg/arrow-left";
import { ArrowRight } from "../../../svg/arrow-right";
import { Button } from "../../button/button";
import { MainTitle } from "../../main-title/main-title";
import { useWorkWithHeads } from "./use-work-with-head";
import styles from "./work-with-head.module.css";

export const WorkWithHead = () => {
  const { nextSlide, prevSlide } = useWorkWithHeads();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainTitle
          align="left"
          cost="h2"
          lastText="partners"
          previousText="Working with "
          strongText="world class "
        />
      </div>
      <div className={styles.interaction}>
        <p className={styles.text}>
          Our hiring process is so simple and easy to do, just follow the steps
          and you’re done!
        </p>
        <div className={styles.buttons}>
          <Button
            info={{
              size: "medium",
              style: "bordered",
              kind: "svg",
              type: "button",
              click: prevSlide,
            }}
          >
            <span className={styles.svgContainer}>
              <ArrowLeft />
            </span>
          </Button>
          <Button
            info={{
              size: "medium",
              style: "bordered",
              kind: "svg",
              type: "button",
              click: nextSlide,
            }}
          >
            <span className={styles.svgContainer}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
