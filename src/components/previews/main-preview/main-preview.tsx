import { ArrowRight } from "../../../svg/arrow-right";
import { Leafs } from "../../../svg/leafs";
import { Button } from "../../button/button";
import { MainTitle } from "../../main-title/main-title";
import srcWoman from "../../../img/main-preview-woman.png";
import srcManFirst from "../../../img/main-preview-man-1.png";
import srcManSecond from "../../../img/main-preview-man-2.png";
import styles from "./main-preview.module.css";

export const MainPreview = () => {
  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        <div className={styles.info}>
          <MainTitle
            cost="h1"
            previousText="Let’s "
            strongText="boost up "
            lastText="your hiring process"
            align="left"
          />
          <p className={styles.subTitle}>
            We are nost efficient and reliable souce of hiring perocess and two
            time faster than any other companies
          </p>
          <div className={styles.buttons}>
            <Button
              info={{
                size: "big",
                style: "primary",
                kind: "base",
                type: "button",
              }}
            >
              Start hiring
              <span className={styles.svgContainer}>
                <ArrowRight />
              </span>
            </Button>
            <Button
              info={{
                size: "medium",
                style: "bordered",
                kind: "base",
                type: "button",
              }}
            >
              Post a job
              <span className={styles.svgContainer}>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
        <div className={styles.imgs}>
          <div className={styles.leafs}>
            <Leafs />
          </div>
          <div className={styles.people}>
            <img className={styles.imgTop} src={srcManFirst} alt="man" />
            <div className={styles.imgBottom}>
              <img className={styles.imgWoman} src={srcWoman} alt="man" />
              <img className={styles.imgMan} src={srcManSecond} alt="woman" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
