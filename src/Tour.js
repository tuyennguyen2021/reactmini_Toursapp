import React, { useState } from "react";

const Tour = (props) => {
  const { tour, removeTours } = props;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <div className="tour-price ">{tour.price}</div>
        </div>
        <p>
          {readMore
            ? tour.info
            : ` ${tour.info.split(" ").slice(0, 30).join(" ")} ...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show less` : `Show more`}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTours(tour.id);
          }}
        >
          Not interested!
        </button>
      </footer>
    </article>
  );
};

export default Tour;
