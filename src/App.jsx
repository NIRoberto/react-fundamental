// import React, { useState } from "react";

// import "./App.css";
// const Modal = (props) => {
//   console.log(props);
//   return (
//     <div className="Modal">
//       <button
//         onClick={() => {
//           props.setIsOpen(false);
//         }}
//       >
//         close
//       </button>
//       <form action="">
//         <div>
//           <label htmlFor="">Title:</label>
//           <input type="text" name="title" />
//         </div>
//         <div>
//           <label htmlFor="">Price:</label>
//           <input type="number" name="price" />
//         </div>

//         <div>
//           <label htmlFor="">Date</label>
//           <input type="date" />
//         </div>
//       </form>
//     </div>
//   );
// };

// const App = () => {

//   const listElement = [
//     {
//       id: 1,
//       title: "jAVASCRIPT TUTORIAL",
//       price: 20,
//       date: "12 june 2023",
//     },
//     {
//       id: 2,
//       title: "HTML TUTORIAL",
//       price: 20,
//       date: "12 june 2023",
//     },
//     {
//       id: 3,
//       title: "JAVA TUTORIAL",
//       price: 20,
//       date: "12 june 2023",
//     },
//   ];
//   const [isOpen, setIsOpen] = useState(false);

//   const [light, setLight] = useState(false);

//   const [list, setList] = useState(listElement);

//   return (
//     <div>
//       {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
//       <div className="listCard">
//         {listElement.map((item, index) => {
//           return (
//             <>
//               <div className="card">
//                 <h1>{item.title}</h1>
//                 <p>{item.price}</p>
//                 <p>{item.date}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>

//       <button
//         onClick={() => {
//           setIsOpen(true);
//         }}
//       >
//         Open a modal
//       </button>

//       <button
//         onClick={function () {
//           setIsOpen(false);
//         }}
//       >
//         Close a modal
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Trending from "./pages/Trending";
import Series from "./pages/Series";
import Home from "./pages/Home";
import Layout from "./components/Layout";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Trending */}
            <Route path="/trending" element={<Trending />} />
            <Route path="/series" element={<Series />} />
            {/* Series */}
            <Route
              path="*"
              element={
                <>
                  <h1>Page not Found</h1>
                  <Link to={"/"}>Back to home</Link>
                </>
              }
            />
          </Route>
          {/* Home  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
