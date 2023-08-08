import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/tour-images/weather.png";
import guideImg from "../assets/tour-images/guide.png";
import customizationImg from "../assets/tour-images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: " Calculate Weather",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.",
  },
  {
    imgUrl: guideImg,
    title: " Best Tour Guide",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.",
  },
  {
    imgUrl: customizationImg,
    title: " Customization",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
