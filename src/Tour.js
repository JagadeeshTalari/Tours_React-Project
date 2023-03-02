import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadmore] = useState(true);
  return (
    <section className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p>
          {readMore ? `${info.substring(0, 200)}.....` : info}

          <button onClick={() => setReadmore(!readMore)}>
            {readMore ? "read more" : "see less"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </section>
  );
};

export default Tour;
