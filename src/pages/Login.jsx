import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
        input
      );
      console.log(res.data);
      localStorage.setItem("isLogin", res.data);
      alert("login success");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={input.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={input.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
