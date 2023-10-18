import { useContext, useEffect, useState } from "react";
import { TourCard } from "../components/TourCard";
import { AppContext } from "../App";
import axios from "axios";

const TourList = () => {
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
        {/* {click}
        <button
          onClick={() => {
            setClick("Hello World");
          }}
        >
          Click me
        </button> */}
        {tours.map((item) => {
          return <TourCard key={item.id} tour={item} />;
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
