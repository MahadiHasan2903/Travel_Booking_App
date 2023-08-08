import React from "react";
import "../styles/Home.css";
import heroImg from "../assets/tour-images/hero-img01.jpg";
import heroImg02 from "../assets/tour-images/hero-img02.jpg";
import heroVideo from "../assets/tour-images/hero-video.mp4";
import worldImg from "../assets/tour-images/world.png";
import experienceImg from "../assets/tour-images/experience.png";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/searchbar/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTour/FeaturedTourList";
import MasonryImagesGallery from "../components/ImageGallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="worldImg" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae praesentium reprehenderit exercitationem officia,
                  velit facere possimus perferendis culpa. Culpa sit esse nemo
                  earum, fugiat nesciunt voluptatemNam, laudantium.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
            <Col lg="2" sm="12">
              <div className="hero_img-box hero_video-box mt-4">
                <video src={heroVideo} alt="heroVideo" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="heroImg02" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3" sm="12">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> We will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Veniam autem beatae delectus, quaerat laudantium ea!
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Reguler Clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="experienceImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">Visit or customers tour gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title">What out fans say about us </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
