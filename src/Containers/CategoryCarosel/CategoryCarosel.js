import { Card, SectionHeader } from "../../Components/index";

import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/index";
import "react-multi-carousel/lib/styles.css";
import "./CategoryCarosel.css";
import BoardImage2nd from "../../Assets/Images/BoardImage2nd.svg";

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

const CategoryCarosel = ({ title, products }) => {
  const listCategories = useSelector((state) => state.category.categorys);
  return (
    <section className="catcarousel">
      <Carousel
        additionalTransfrom={0}
        autoPlay
        autoPlaySpeed={4000}
        centerMode={true}
        className="Container-carosl"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {/* {products.map((v) => (
          <div> 
            <Card product={v} />
          </div>
        ))} */}

        {listCategories ? (
          listCategories.map((v) => (
            <>
            <Link to={`/category/${v.id}`}>
              <div className="cardcatcaro" key={v.id}>
                <img src={BoardImage2nd} className="ImageCat" />

                <div className="bgnamecatcaro">
                  <h5 className="NameCatCaro">{v.title}</h5>
                </div>
              </div>
              </Link>
            </>
          ))
        ) : (
          <Loader />
        )}

        {/* <div className="cardcatcaro">
          <img src={BoardImage2nd} className="ImageCat" />

          <div className="bgnamecatcaro">
            <h5 className="NameCatCaro">men's clothing</h5>
          </div>
        </div>
        <div className="cardcatcaro">
          <img src={BoardImage2nd} className="ImageCat" />

          <div className="bgnamecatcaro">
            <h5 className="NameCatCaro">men's clothing jkhsfkhskfjhqlksfjqkfkqkqsjkdqkj</h5>
          </div>
        </div>
        <div className="cardcatcaro">
          <img src={BoardImage2nd} className="ImageCat" />

          <div className="bgnamecatcaro">
            <h5 className="NameCatCaro">men's clothing</h5>
          </div>
        </div>
        <div className="cardcatcaro">
          <img src={BoardImage2nd} className="ImageCat" />

          <div className="bgnamecatcaro">
            <h5 className="NameCatCaro">men's clothing</h5>
          </div>
        </div> */}
      </Carousel>
      {/* // <section id="CardContainer">
    //   <SectionHeader title={title}></SectionHeader>
    //   <div className="row justify-content-center CardContainer-dekstop containerxx">
    //     {products.map((v) => (
    //       <div className="col-2">
    //         <Card product={v} />
    //       </div>
    //     ))}
    //   </div> */}{" "}
    </section>
  );
};

export default CategoryCarosel;
