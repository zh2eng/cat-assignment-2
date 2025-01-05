import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-80 transition">
      <a href="#">
        <img
          className="rounded-t-lg object-cover w-full h-[208px]"
          src={props.img}
          alt={props.alt}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex gap-x-3">
          <div className="grid gap-1 items-center text-theme-800">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
              data-icon="ci:location"
            >
              <symbol id="ai:ci:location">
                <path
                  fill="currentColor"
                  d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
                ></path>
              </symbol>
              <use xlinkHref="#ai:ci:location"></use>
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-xl"
              data-icon="rating:star"
            >
              <symbol id="rating:star">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                ></path>
              </symbol>
              <use xlinkHref="#rating:star"></use>
            </svg>
          </div>
          <div className="grid gap-1 grid-rows-3 items-center font-bold text-lg">
            <span>{props.location}</span>
            <span>{props.rating}/5.0</span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;

// Validate the 'data' prop
Card.propTypes = {
    props: PropTypes.array.isRequired,  // Ensure data is an array and is required
};