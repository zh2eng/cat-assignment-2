// import React from "react";
import PropTypes from "prop-types";  // Import PropTypes
import Navbar from "../Component/Navbar/Navbar";
import CardsLayout from "./CardsLayout";

export default function Food({ data }) {
    const items = data.filter(item => item.category === "food");
    // console.log(items);

    return (
        <>
            <Navbar />
            <CardsLayout data={items} />
        </>
    );
}

// Validate the 'data' prop
Food.propTypes = {
    data: PropTypes.array.isRequired,  // Ensure data is an array and is required
};
