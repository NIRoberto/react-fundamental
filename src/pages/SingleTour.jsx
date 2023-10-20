import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const SingleTour = () => {
  const { tours } = useContext(AppContext);
  const tourId = useParams();

  const singleTour = tours?.find((tour) => {
    return tour._id == tourId.tourId;
  });
  console.log(singleTour);

  return (
    <div className="single">
      <img
        style={{ width: "50%" }}
        src={singleTour?.backdropImage}
        alt={singleTour?.Title}
      />
      <h4>{singleTour?.Title}</h4>
      <p>{singleTour?.destination}</p>
    </div>
  );
};

export default SingleTour;
