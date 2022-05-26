import { Card, SectionHeader } from "../../Components/index";

import "./CardContainer.css";
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
    items: 4,
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

const CardContainer = ({ title, products, categoryId }) => {
  return (
    <section id='CardContainer'>
      <SectionHeader title={title} categoryId={categoryId}></SectionHeader>
      <Carousel
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className='Container-carosl'
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
        responsive={responsive}
        showDots={false}
        sliderClass=''
        slidesToSlide={2}
        swipeable>
        {products.map(v => (
          <div>
            <Card product={v} />
          </div>
        ))}
      </Carousel>
      {/* // <section id="CardContainer">
    //   <SectionHeader title={title}></SectionHeader>
    //   <div className="row justify-content-center CardContainer-dekstop containerxx">
    //     {products.map((v) => (
    //       <div className="col-2">
    //         <Card product={v} />
    //       </div>
    //     ))}
    //   </div> */}
      //{" "}
    </section>
  );
};

export default CardContainer;
