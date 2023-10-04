import React, { useState } from "react";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email.length < 3) {
      alert("Email is wrong");
    } else {
      alert("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email or username</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            id=""
          />
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
