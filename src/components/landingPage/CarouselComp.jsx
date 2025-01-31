import carouselStyles from "../../styles/carousel.module.css";
import React from "react";
import Image from "next/image";
import useCarousel from "@/hooks/useCarousel";
import { images } from "../../../utils/links";

const CarouselComp = () => {
  const { activeIndex } = useCarousel(images);

  return (
    <div
      className={`${carouselStyles.carousel} kontener mx-auto md:rounded-2xl pt-3 lg:px-8`}
    >
      <div className={` ${carouselStyles.carouselInner}`}>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <input
              className={`${carouselStyles.carouselOpen} form-checkbox appearance-none hidden`}
              type="radio"
              id={`carousel${index + 1}`}
              name="carousel"
              aria-hidden="true"
              checked={index === activeIndex}
            />
            <div
              className={`kontener mx-auto justify-center items-center ${carouselStyles.carouselItem}`}
            >
              <Image
                src={image}
                alt={`Carousel ${index + 1}`}
                className=" lg:rounded-2xl"
                width={2000}
                height={700}
                priority
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CarouselComp;
