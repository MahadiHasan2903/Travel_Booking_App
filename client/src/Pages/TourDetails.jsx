import React, { useEffect, useRef, useState } from "react";
import "../styles/TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/averageRating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaDollarSign } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RiPinDistanceFill } from "react-icons/ri";
import avatar from "../assets/tour-images/avatar.jpg";
import Booking from "../components/Booking/Booking";

import { useSelector, useDispatch } from "react-redux";
import { getSingleTour } from "../redux/action/tourAction";
import { submitReview } from "../redux/action/reviewAction";
import { toast } from "react-toastify";

const TourDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviewsMsgRef = useRef("");
  const [userRating, setUserRating] = useState(0);
  const [user, setUser] = useState({});
  const [submittedReview, setSubmittedReview] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  // Fetch single tour when the component mounts
  useEffect(() => {
    dispatch(getSingleTour(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("accessToken"));
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const { tour, isLoading, error } = useSelector((state) => state.tour);
  const { review, error: reviewError } = useSelector((state) => state.review);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tour) {
    return <div>Tour not found.</div>;
  }

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour.data;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  const isRatingSelected = (rating) => rating <= userRating;

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      toast.error("Please login first to submit a review.");
      return;
    }

    try {
      const reviewObj = {
        username: user.name,
        reviewText,
        rating: userRating,
      };

      // Call the action function and pass the id as an argument
      const submittedReview = await dispatch(submitReview(id, reviewObj));

      // Store the submitted review data in the component state
      setSubmittedReview(submittedReview);

      toast.success("Review submitted successfully");
      console.log("Review submitted successfully:", submittedReview);
    } catch (error) {
      toast.error("Error submitting review");
      console.log(error);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour_content">
              <img src={photo} alt="photo" />
              <div className="tour_info">
                <h2>{title}</h2>
                <div className="d-flex align-items-center gap-5">
                  {avgRating > 0 ? (
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <AiFillStar className="tour_icon" />
                      {avgRating}
                      <span>({reviews?.length})</span>
                    </span>
                  ) : (
                    <span className="tour_rating">Not Rated</span>
                  )}

                  <span>
                    <GrLocation className="tour_icon" />
                    {address}
                  </span>
                </div>
                <div className="tour_extra-details d-flex align-items center">
                  <span>
                    <MdLocationPin className="tour_icon" />
                    {city}
                  </span>
                  <span>
                    <RiPinDistanceFill className="tour_icon" />
                    {distance} k/m
                  </span>
                  <span>
                    <FaDollarSign className="tour_icon" />$ {price}/per person
                  </span>

                  <span>
                    <HiUserGroup className="tour_icon" />
                    {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className="tour_reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>

                <Form onSubmit={handleSubmitReview}>
                  <div className="rating_group d-flex align-items-center gap-3 mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <span
                        key={rating}
                        onClick={() => handleStarClick(rating)}
                      >
                        {isRatingSelected(rating) ? (
                          <AiFillStar />
                        ) : (
                          <AiOutlineStar />
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="review_input d-flex align-items-center">
                    <input
                      type="text"
                      ref={reviewsMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />
                    <button
                      className="btn primary_btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user_reviews">
                  {review && (
                    <div className="review_item">
                      <img src={avatar} alt="avatar" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {new Date(review.date).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            <AiFillStar className="review_icon" />
                            {review.rating}
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  )}
                  {reviews.map((review, index) => (
                    <div className="review_item" key={index}>
                      <img src={avatar} alt="avatar" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.username}</h5>
                            <p>
                              {new Date(review.date).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            <AiFillStar className="review_icon" />
                            {review.rating}
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
