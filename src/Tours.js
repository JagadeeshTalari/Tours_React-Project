import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  console.log(tours);
  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </main>
  );
};

export default Tours;
