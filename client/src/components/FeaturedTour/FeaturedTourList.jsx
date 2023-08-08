import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedTours } from "../../redux/action/tourAction";
import TourCard from "../../shared/Tourcard/TourCard";
import { Col, Row } from "reactstrap";

const FeaturedTourList = () => {
  const dispatch = useDispatch();
  const { featuredTours, isLoading, error } = useSelector(
    (state) => state.tour
  );

  // console.log(featuredTours);

  useEffect(() => {
    dispatch(getFeaturedTours());
  }, [dispatch]);

  if (isLoading) {
    return <h4>Loading....</h4>;
  }

  if (error || !Array.isArray(featuredTours.data)) {
    return <h4>No featured tours available.</h4>;
  }

  return (
    <Row>
      {featuredTours.data.map((tour) => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </Row>
  );
};

export default FeaturedTourList;
