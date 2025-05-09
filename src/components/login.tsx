import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {

  const [password, setPassword] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { id, value } = e.target;
    setPassword({ ...password, [id]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password)

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL + "auth/signin", password, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.data.message === "success") {
        navigate("/dashboard")
        toast(response.data.message)
      } else {
        toast(response.data.message || "Login failed")
      }
      console.log("success:" + response.data.message);
    } catch (error) {
      console.log("Error submitting sheet: " + error);
    }
  }

  return (
    <div className="min-h-screen flex">
    <form className="flex flex-col items-center gap-4 bg-white md:px-30 md:py-20 p-10 m-auto rounded-lg" onSubmit={handleSubmit}>
      <h2 className="font-bold text-2xl">Danny</h2>
      <h4 className="text-lg text-[#7E7E7E] max-w-[270px] mx-auto text-center">Login</h4>
      <input 
        type="text"
        id="email"
        onChange={handleChange}
        placeholder="Email"
        value={password.email}
        className="border border-gray-300 py-2 rounded-md outline-none px-10"
      />
      <input 
        type="password"
        id="password"
        onChange={handleChange}
        placeholder="Password"
        value={password.password}
        className="border border-gray-300 py-2 rounded-md outline-none px-10"
      />
      <button className="bg-purple-500 px-10 md:px-10 py-2 rounded-md cursor-pointer text-white">Login</button>
    </form>
  </div>
  )
}

export default Login;