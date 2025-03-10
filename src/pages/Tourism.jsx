// import React from "react";
import PropTypes from "prop-types";  // Import PropTypes
import Navbar from "../Component/Navbar/Navbar";
import CardsLayout from "./CardsLayout";
import Footer from "../Component/Footer/Footer";

export default function Tourism({data}) {
  const items = data.filter((item) => item.category === "tourist-spot");
  return (
    <>
      <Navbar />
      <CardsLayout data={items} />
      <Footer />
    </>
  );
}

// Validate the 'data' prop
Tourism.propTypes = {
    data: PropTypes.array.isRequired,  // Ensure data is an array and is required
};
