import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours, removeTours } = props;
  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} removeTours={removeTours} />;
        })}
      </div>
    </main>
  );
};

export default Tours;
