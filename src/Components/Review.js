import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "../data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author tt-capitalize">{name}</h4>
      <p className="job tt-capitalize">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="next-btn">
          <FaChevronLeft />
        </button>
        <button className="prev-btn">
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
