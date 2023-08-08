import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import "./TourCard.css";
import calculateAvgRating from "../../utils/averageRating";

const TourCard = ({ tour }) => {
  const { title, _id, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="photo" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card_top  d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <FaMapMarkerAlt className="tour_icon" />
              {city}
            </span>
            {avgRating > 0 ? (
              <span className="tour_rating d-flex align-items-center gap-1">
                <AiFillStar className="tour_icon" />
                {avgRating}
                <span>({reviews.length})</span>
              </span>
            ) : (
              <span className="tour_rating">Not Rated</span>
            )}
          </div>
          <h5 className="tour_title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              {price} <span>/per person</span>
            </h5>

            <button className="btn booking_btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
