import { Link } from "react-router-dom";

export const TourCard = ({ tour }) => {
  return (
    <div className="tourCard">
      <Link to={`${tour._id}`}>
        <img src={tour.backdropImage || "/plae.jpg"} alt="tour image" />
        <div className="tourInfo">
          <h4>{tour.Title}</h4>
          <p>{tour.destination}</p>
        </div>
      </Link>
    </div>
  );
};
