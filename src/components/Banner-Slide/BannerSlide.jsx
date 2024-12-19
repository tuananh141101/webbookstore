import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "./BannerSlide.scss";
import { motion } from "framer-motion";

const BannerSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  return (
    <>
      <div className="wrap-slider">
        <div className="wrap-slider__container">
          <div>
            <Slider {...settings}>
              <div className="slide slide1 d-flex align-items-center justify-content-center">
                <div className="slide1-container d-flex align-items-center justify-content-center flex-column">
                  <div className="animated-single-text">
                    {Array.from("COME AND JOIN THE READING CLUB").map(
                      (letter, idx) => (
                        <span
                          key={idx}
                          // initial={{ opacity: 0 }}
                          // animate={{ opacity: 1 }}
                          // transition={{
                          //   duration: 0.15,
                          //   delay: idx / 10,
                          //   ease: "linear",
                          // }}
                        >
                          {letter}
                        </span>
                      )
                    )}
                  </div>
                  <div className="animated-text">
                    <span>Enjoy the silence in our reading room.</span>
                  </div>
                  <div className="btn-slide d-flex align-items-center justify-content-center">
                    <button
                    // initial={{
                    //   opacity: 0,
                    // }}
                    // animate={{
                    //   opacity: 1,
                    // }}
                    // transition={{
                    //   duration: 1,
                    //   delay: 3.9,
                    //   ease: "easeIn",
                    // }}
                    >
                      SEE MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="slide slide2 d-flex align-items-center justify-content-center">
                <div className="slide2-container d-flex align-items-center justify-content-center flex-column">
                  <div className="animated-text d-flex align-items-center justify-content-center">
                    <span>
                      Book are not made or furniture, but there is nothing else
                      that so beatifully furnishes a house.
                    </span>
                  </div>
                  <div className="btn-slide d-flex align-items-center justify-content-center">
                    <button>FIND OUT MORE</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlide;
