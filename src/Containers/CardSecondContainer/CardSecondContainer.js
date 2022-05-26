import React, { useEffect } from "react";
import { CardSecond, SectionHeader } from "../../Components/index";

import "./CardSecondContainer.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CardSecondContainer = ({ marginTop, title, products, categoryId }) => {
  useEffect(() => {
    console.log("products from second Card  => ", products);
  }, [products]);
  return (
    <section id='cardSecondContainer' style={{ marginTop: marginTop }}>
      <SectionHeader title={title} categoryId={categoryId}></SectionHeader>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={4000}
        centerMode={false}
        className='Container-caroslv2'
        containerClass='container-with-dots'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=''
        slidesToSlide={2}
        swipeable>
        {products.map(v => (
          <CardSecond product={v}></CardSecond>
        ))}
      </Carousel>
    </section>
  );
};

CardSecondContainer.defaultProps = {
  marginTop: 50,
};

export default CardSecondContainer;
