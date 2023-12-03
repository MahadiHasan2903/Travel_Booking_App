import React, { useState } from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { FiMapPin } from "react-icons/fi";
import { GiPathDistance } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
    maxGroupSize: "",
  });

  const navigate = useNavigate();

  const { location, distance, maxGroupSize } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const searchHandler = async () => {
    if (!location || distance === 0 || maxGroupSize === 0) {
      return toast.error("Fill all the fields");
    }

    try {
      const res = await fetch(
        `${server}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const result = await res.json();
      navigate(
        `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        { state: result.data }
      );
    } catch (error) {
      toast.error("Error occurred while fetching data");
    }
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <FiMapPin className="icon" />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-middle">
            <span>
              <GiPathDistance />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                name="distance"
                value={distance}
                onChange={handleChange}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-last">
            <span>
              <HiUserGroup />
            </span>
            <div>
              <h6>Max People</h6>
              <input
                type="number"
                placeholder="0"
                name="maxGroupSize"
                value={maxGroupSize}
                onChange={handleChange}
              />
            </div>
          </FormGroup>

          <FormGroup>
            <span className="search_icon" type="submit" onClick={searchHandler}>
              <AiOutlineSearch />
            </span>
          </FormGroup>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
