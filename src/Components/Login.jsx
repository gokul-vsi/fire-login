import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Components/firebase";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password); //  This is code execute to sign in the user
      toast.success("User Logged in Successfully");
      window.location.href = "/home";
      console.log("logged in successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-5">
        <ToastContainer />
        <div className="flex mt-40 flex-row justify-center items-center ">
          <form onSubmit={login} className="main-div box-shadow p-10 px-16  ">
            <h1 className="text-center mb-5 text-3xl font-bold ">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="">Enter Your Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-blue-500 rounded outline-none p-1"
                required
              />
            </div>
            <div className="flex mt-5 flex-col">
              <label htmlFor="">Enter Your password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-blue-500 rounded outline-none p-1 "
                required
              />
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                type="submit"
                value="Submit"
                className="p-2 px-4 rounded hover:scale-110 bg-blue-500 text-white"
              />
            </div>
            <div className="flex justify-end mt-4">
                <p className="text-sm">New User? <Link to='/register' className="text-blue-500">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
