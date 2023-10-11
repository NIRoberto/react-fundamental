/* eslint-disable no-undef */
import { useState } from "react";

import "./App.css";
const Modal = (props) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    props.setList((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          title: title,
          price: price,
          date: date,
        },
      ];
    });

    props.setLightetIsOpen(false);
    props.SetTitle("");
    props.setPrice("");
    props.setDate("");
  };
  console.log(props);
  return (
    <div className="Modal">
      <button
        onClick={() => {
          props.setIsOpen(false);
        }}
      >
        close
      </button>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            name="title"
          />
        </div>
        <div>
          <label htmlFor="">Price:</label>
          <input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            name="price"
          />
        </div>

        <div>
          <label htmlFor="">Date</label>
          <input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <button>save</button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const listElement = [
    {
      id: 1,
      title: "jAVASCRIPT TUTORIAL",
      price: 20,
      date: "12 june 2023",
    },
    {
      id: 2,
      title: "HTML TUTORIAL",
      price: 20,
      date: "12 june 2023",
    },
    {
      id: 3,
      title: "JAVA TUTORIAL",
      price: 20,
      date: "12 june 2023",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [light, setLight] = useState(false);

  const [list, setList] = useState(listElement);

  return (
    <div>
      {isOpen && (
        <Modal setList={setList} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <div className="listCard">
        {list.map((item, index) => {
          return (
            <div key={index} className="card">
              <h1>{item.title}</h1>
              <p>{item.price}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open a modal
      </button>

      <button
        onClick={function () {
          setIsOpen(false);
        }}
      >
        Close a modal
      </button>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Trending from "./pages/Trending";
// import Series from "./pages/Series";
// import Home from "./pages/Home";
// import Layout from "./components/Layout";
// import "./App.css";

// const Test = (props) => {
//   console.log(props);
//   return;
// };
// const App = () => {
//   const [str, setStr] = useState("String");

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             {/* Trending */}
//             <Route path="/trending" element={<Trending />} />
//             <Route path="/series" element={<Series />} />
//             {/* Series */}
//             <Route
//               path="*"
//               element={
//                 <>
//                   <h1>Page not Found</h1>
//                   <Link to={"/"}>Back to home</Link>
//                 </>
//               }
//             />
//           </Route>

//           {/* Home  */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
