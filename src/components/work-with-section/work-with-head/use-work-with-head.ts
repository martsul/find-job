import { useSwiper } from "swiper/react";

export const useWorkWithHeads = (): {
  nextSlide: () => void;
  prevSlide: () => void;
} => {
  const swiper = useSwiper();

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };

  return { nextSlide, prevSlide };
};
