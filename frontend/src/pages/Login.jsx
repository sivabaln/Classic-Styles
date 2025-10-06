import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 flex flex-col gap-5 border border-gray-200 dark:border-gray-700 transition-all"
      >

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            {currentState}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {currentState === "Login"
              ? "Welcome back! Please login to your account."
              : "Create your account to get started."}
          </p>
        </div>

        {currentState !== "Login" && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                       focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Full Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="Email"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     focus:ring-2 focus:ring-blue-500 outline-none transition"
          placeholder="Password"
          required
        />

        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <p className="cursor-pointer hover:underline">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-pink-500 hover:bg-pink-600
                     text-white rounded-lg font-medium transition"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
