import { useContext, useEffect, useState } from "react";
import { TourCard } from "../components/TourCard";
import { AppContext } from "../context/AppProvider";


export const TourList = () => {
  const { tours } = useContext(AppContext);

  // const [click, setClick] = useState("Hello");

  // console.log("render");

  // useEffect(() => {
  //   console.log("Side effect");
  // }, [click]);

  //   async/ await

  return (
    <>
      <div className="tours">
        {tours?.map((item) => {
          return <TourCard key={item._id} tour={item} />;
        })}
      </div>
    </>
  );
};
const Tour = () => {
  return (
    <div>
      <TourList />
    </div>
  );
};

export default Tour;
