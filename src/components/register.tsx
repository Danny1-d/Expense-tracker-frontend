import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [password, setPassword ] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {id, value } =e.target;
    setPassword({...password, [id] : value})
  }

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password)

    try {
      const response = await axios.post("http://localhost:5000/auth/signup", password, {
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
      <form className="flex flex-col items-center gap-4 bg-white w-[70%] md:w-[50%] m-auto py-30 px-19 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="font-bold text-4xl">Danny</h2>
        <h4 className="font-bold text-2xl">Register</h4>
        <input 
          type="text"
          placeholder="First Name"
          value={password.first_name}
          onChange={handleChange}
          id="first_name"
          className="border border-gray-300 py-2 rounded-md outline-none px-10"
        />
        <input 
          type="text"
          placeholder="Last Name"
          value={password.last_name}
          onChange={handleChange}
          id="last_name"
          className="border border-gray-300 py-2 rounded-md outline-none px-10"
        />
        <input 
          type="text"
          placeholder="Email"
          value={password.email}
          onChange={handleChange}
          id="email"
          className="border border-gray-300 py-2 rounded-md outline-none px-10"
        />
        <input 
          type="password"
          placeholder="Password"
          value={password.password}
          onChange={handleChange}
          id="password"
          className="border border-gray-300 py-2 rounded-md outline-none px-10"
        />
        <Link to="/auth/ForgotPassword">
          <button className="flex justify-end text-purple-500 cursor-pointer text-sm">Forgot Password?</button>
        </Link>
        <button className="bg-purple-500 px-10 py-2 rounded-full cursor-pointer text-white">Sign Up</button>
      </form>
    </div>
  )
}

export default Register