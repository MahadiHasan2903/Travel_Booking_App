import React from "react";
import Slider from "react-slick";
import avg01 from "../../assets/tour-images/ava-1.jpg";
import avg02 from "../../assets/tour-images/ava-2.jpg";
import avg03 from "../../assets/tour-images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde
          accusantium non mollitia. Nesciunt hic temporibus aliquid nobis alias
          voluptate aperiam, dolores ad atque saepe similique sequi
          reprehenderit numquam, praesentium nulla distinctio eos, commodi fugit
          quas!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avg01} className="w-25 h-25 rounded-2" alt="avg01" />
        </div>
        <h6 className="mb-0 mt-3">Robert Downey Jr.</h6>
        <p>Customer</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde
          accusantium non mollitia. Nesciunt hic temporibus aliquid nobis alias
          voluptate aperiam, dolores ad atque saepe similique sequi
          reprehenderit numquam, praesentium nulla distinctio eos, commodi fugit
          quas!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avg02} className="w-25 h-25 rounded-2" alt="avg01" />
        </div>
        <h6 className="mb-0 mt-3">Elizabeth Olsen</h6>
        <p>Customer</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde
          accusantium non mollitia. Nesciunt hic temporibus aliquid nobis alias
          voluptate aperiam, dolores ad atque saepe similique sequi
          reprehenderit numquam, praesentium nulla distinctio eos, commodi fugit
          quas!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avg03} className="w-25 h-25 rounded-2" alt="avg01" />
        </div>
        <h6 className="mb-0 mt-3">Chris Hemsworth </h6>
        <p>Customer</p>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde
          accusantium non mollitia. Nesciunt hic temporibus aliquid nobis alias
          voluptate aperiam, dolores ad atque saepe similique sequi
          reprehenderit numquam, praesentium nulla distinctio eos, commodi fugit
          quas!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avg02} className="w-25 h-25 rounded-2" alt="avg01" />
        </div>
        <h6 className="mb-0 mt-3">Elizabeth Olsen</h6>
        <p>Customer</p>
      </div>
    </Slider>
  );
};

export default Testimonials;
