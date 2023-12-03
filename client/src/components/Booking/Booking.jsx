import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { bookTour } from "../../redux/action/bookingAction";
import { useSelector, useDispatch } from "react-redux";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  const user = useSelector((state) => state.user.user);

  const [booking, setBooking] = useState({
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    userId: user ? user._id : "",
    userEmail: user ? user.email : "",
    tourName: title,
  });

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBooking((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (
      booking.fullName === "" ||
      booking.phone === "" ||
      booking.bookAt === "" ||
      booking.guestSize === ""
    ) {
      toast.warning("Please fill in all the required fields.");
    } else {
      if (!accessToken) {
        toast.error("Please login first to book a tour.");
        return;
      } else {
        try {
          dispatch(bookTour(booking));
          toast.success("Booking Successful");

          navigate("/thank-you");
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
  };
  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        {avgRating > 0 ? (
          <span className="tour_rating d-flex align-items-center">
            <AiFillStar className="booking_icon" />
            {avgRating}
            <span>({reviews?.length})</span>
          </span>
        ) : (
          <span className="tour_rating">Not Rated</span>
        )}
      </div>

      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info_form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <AiOutlineClose /> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
