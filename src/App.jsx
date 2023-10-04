import { useState } from "react";
import Nav from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import BlogCard from "./components/reusable/BlogCard";

import "./App.css";
import Login from "./pages/Login";

function App() {
  const user = {
    name: "Robert",
    email: "robert@gmail.com",
    age: 12,
    role: "admin",
  };

  let [num, setNum] = useState(0);

  let [modal, setModal] = useState(false);

  // function handleClick() {
  //   console.log("button clicked");

  //   setNum(++num);
  // }

  console.log(modal);

  const Modal = () => {
    return (
      <div>
        <h1 onChange={function () {}}>Modal</h1>
      </div>
    );
  };

  const blogPost = [
    {
      image: "/react-image.png",
      title: "react tutorial",
      content: `
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi
        voluptatum, quaerat, eos nemo sapiente omnis vel similique quibusdam
        ullam cum nostrum accusamus explicabo natus. Nostrum, animi. Numquam,
        ipsa fugiat!
      `,
    },
    {
      image: "/react-image.png",
      title: "Javascript tutorial",
      content: `
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi
        voluptatum, quaerat, eos nemo sapiente omnis vel similique quibusdam
        ullam cum nostrum accusamus explicabo natus. Nostrum, animi. Numquam,
        ipsa fugiat!
      `,
    },
    {
      image: "/react-image.png",
      title: "CSS tutorial",
      content: `
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi
        voluptatum, quaerat, eos nemo sapiente omnis vel similique quibusdam
        ullam cum nostrum accusamus explicabo natus. Nostrum, animi. Numquam,
        ipsa fugiat!
      `,
    },
    {
      image: "/react-image.png",
      title: " HTML tutorial",
      content: `
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi
        voluptatum, quaerat, eos nemo sapiente omnis vel similique quibusdam
        ullam cum nostrum accusamus explicabo natus. Nostrum, animi. Numquam,
        ipsa fugiat!
      `,
    },
  ];

  return (
    <>
      {/* <Nav user={user} />

      <BlogCard />

      <Footer />

      <h1>{num}</h1>

      <button onClick={handleClick}>click</button>
      <br />
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        open a modal
      </button> */}

      {/* <form action="">
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </form> */}

      {/* 
          
          if else  

          conditional operator ( ? : )

          short circuit operators ( &&  or ||)
      
      
      
      */}

      {/* {5 > 6 ? (
        <>
          {" "}
          <h1>The condition is true </h1>
        </>
      ) : (
        <>
          <h2>Condition is false</h2>
        </>
      )} */}

      {/* {modal ? (
        <Modal />
      ) : (
        <>
          <h1>Modal is closed</h1>
        </>
      )}

      <button
        onClick={() => {
          setModal(true);
        }}
      >
        open model
      </button>

      <button
        onClick={() => {
          setModal(false);
        }}
      >
        close modal
      </button> */}

      {/*   1. Rendering a list */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        {blogPost.map((post, index) => {
          return (
            <>
              <div>
                <img src={post.image} alt="" />
                <h1>{post.title}</h1>

                <p>{post.content}</p>
                <button>Read more</button>
              </div>
            </>
          );
        })}
      </div>

      <Login />
    </>
  );
}

export default App;
