import React, { useState } from "react";
import axios from "axios";

export const Forgot = () => {
  const [password, setPassword] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { value } = e.target;
    setPassword( value );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password)

    try {
      const response = await axios.post("http://localhost:5000/auth/ForgotPassword", password, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("success:" + response.data.message);
    } catch (error) {
      console.log("Error submitting sheet: " + error);
    }
  }

  return (
    <div className="min-h-screen flex">
    <form className="flex flex-col items-center gap-4 bg-white md:px-30 md:py-20 p-12 m-auto rounded-lg" onSubmit={handleSubmit}>
      <h2 className="font-bold text-4xl">Danny</h2>
      <h4 className="text-lg text-[#7E7E7E] mx-auto text-center">Forgotpassword</h4>
      <input 
        type="text"
        id="email"
        onChange={handleChange}
        placeholder="Email"
        value={password}
        className="border border-gray-300 py-1 rounded-md outline-none px-10"
      />
      <button className="bg-purple-500 px-10 py-2 rounded-full cursor-pointer text-white">Sign Up</button>
    </form>
  </div>
  )
}

export default Forgot;