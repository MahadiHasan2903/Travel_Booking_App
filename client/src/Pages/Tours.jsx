import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonSection from "../shared/CommonSection/CommonSection";
import "../styles/Tour.css";
import SearchBar from "../shared/searchbar/SearchBar";
import Newsletter from "../shared/Newsletter/Newsletter";
import TourCard from "../shared/Tourcard/TourCard";
import { Col, Container, Row } from "reactstrap";
import { fetchTours, fetchTourCount } from "../redux/action/tourAction";

const Tours = () => {
  const toursPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const { tours, loading, error, tourCount } = useSelector(
    (state) => state.tour
  );

  console.log(tours);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(fetchTourCount());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }, [tours, tourCount]);

  const dispatch = useDispatch();

  const totalPages = Math.ceil(tourCount / toursPerPage);

  useEffect(() => {
    // This will run whenever the currentPage changes
    // You can add any additional logic related to currentPage change here
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTours = () => {
    if (loading) {
      return <h4>Loading....</h4>;
    }

    if (error) {
      return <h4>Error: {error}</h4>;
    }

    if (!Array.isArray(tours.data) || tours.data.length === 0) {
      return <h4>No tours available.</h4>;
    }

    const startIndex = (currentPage - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    return tours.data.slice(startIndex, endIndex).map((tour) => (
      <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
        <TourCard tour={tour} />
      </Col>
    ));
  };

  const renderPagination = () => {
    return (
      <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
        {[...Array(totalPages).keys()].map((number) => (
          <span
            key={number}
            onClick={() => handlePageChange(number + 1)}
            className={currentPage === number + 1 ? "active_page" : ""}
          >
            {number + 1}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {renderTours()}
            <Col lg="12">{renderPagination()}</Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
