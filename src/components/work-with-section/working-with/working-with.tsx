import { Swiper, SwiperSlide } from "swiper/react";
import { WorkWithHead } from "../work-with-head/work-with-head";
import { FC } from "react";
import { WorkWithProps } from "../../../types/work-with";
import { WorkWithCard } from "../work-with-card/work-with-card";
import styles from "./working-with.module.css";
import "swiper/swiper-bundle.css";

export const WorkingWith: FC<WorkWithProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Swiper spaceBetween={20} slidesPerView={3}>
          <WorkWithHead />
          {data.map((element, ind) => {
            return (
              <SwiperSlide key={ind}>
                <WorkWithCard
                  head={element.head}
                  text={element.text}
                  description={element.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
