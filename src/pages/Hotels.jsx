// import React from "react";
import PropTypes from "prop-types";  // Import PropTypes
import Navbar from "../Component/Navbar/Navbar";
import CardsLayout from "./CardsLayout";
import Footer from "../Component/Footer/Footer";

export default function Hotels({ data }) {
  const items = data.filter((item) => item.category === "hotel");
  // console.log(items);

  return (
    <>
      <Navbar />
      <CardsLayout data={items} />
      <Footer />
    </>
  );
}

// Validate the 'data' prop
Hotels.propTypes = {
    data: PropTypes.array.isRequired,  // Ensure data is an array and is required
};

