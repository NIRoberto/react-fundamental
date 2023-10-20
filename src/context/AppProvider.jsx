import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  let url = "https://holiday-planner-4lnj.onrender.com/api/v1/";

  const { data: tours, isLoading: ToursLoading } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await axios.get(url + "tour");
      return res.data;
    },
  });

  const loggedUser = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get(
        url +
          `auth/users/getOne/${
            JSON.parse(localStorage.getItem("isLogin")).user.email
          }`,
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("isLogin").access_token
            }`,
          },
        }
      );
      return res.data;
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  console.log(loggedUser.data);

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(url + "auth/login", data);
      return res.data;
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.setItem("isLogin", JSON.stringify(data));
      window.location.href = "/";
    },
  });

  return (
    <AppContext.Provider value={{ tours, loginMutation }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
