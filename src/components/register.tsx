import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";

const Register = () => {
  const [password, setPassword ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {id, value } =e.target;
    setPassword({...password, [id] : value})
  }

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password)


    try {
      const response = await axios.post( import.meta.env.VITE_API_URL + "auth/signup", password, {

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.data.success) {
        navigate("/dashboard")
        console.log("success:" + response.data.message);
        toast(response.data.message)
      } else {
        toast.error(response.data.message || "Login failed")
      }
    } catch (error) {
      console.log("Error submitting sheet: " + error);
      // toast.error("Error submitting sheet: " + error);
    }
    console.log(import.meta.env.VITE_API_URL + "auth/signup");
    
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f7eeee]">
      <form className="flex flex-col items-center gap-4 bg-white md:px-30 md:py-20 p-3 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="font-bold md:text-3xl text-xl">Danny</h2>
        <h4 className="md:text-lg text-sm text-[#7E7E7E] max-w-[270px] mx-auto text-center font-semibold">REGISTER</h4>
        <input 
          type="text"
          placeholder="First Name"
          value={password.firstName}
          onChange={handleChange}
          id="firstName"
          className="border border-gray-300 py-1 rounded-lg outline-none md:px-5 px-2 placeholder:text-sm placeholder:text-gray-300"
        />
        <input 
          type="text"
          placeholder="Last Name"
          value={password.lastName}
          onChange={handleChange}
          id="lastName"
          className="border border-gray-300 py-1 rounded-lg outline-none md:px-5 px-2 placeholder:text-sm placeholder:text-gray-300"
        />
        <input 
          type="text"
          placeholder="Email"
          value={password.email}
          onChange={handleChange}
          id="email"
          className="border border-gray-300 py-1 rounded-lg outline-none md:px-5 px-2 placeholder:text-sm placeholder:text-gray-300"
        />
        <input 
          type="password"
          placeholder="Password"
          value={password.password}
          onChange={handleChange}
          id="password"
          className="border border-gray-300 py-1 rounded-lg outline-none md:px-5 px-2 placeholder:text-sm placeholder:text-gray-300"
        />

        {/* <p className="text-gray-500 text-sm">By signing up, you agree to our <span className="text-purple-500 cursor-pointer">Terms of Service</span> and <span className="text-purple-500 cursor-pointer">Privacy Policy</span></p> */}


        <Link to="/ForgotPassword" className="underline flex flex-1 justify-end text-purple-500 text-sm">
          Forgot Password?
        </Link>
        

        <button className="bg-[#340260] px-10 md:px-10 py-2 rounded-xl cursor-pointer text-white font-semibold">Sign Up</button>

        <p className="text-sm text-gray-500 flex gap-2">Already have an account? <Link to="/signin" className="underline flex flex-1 justify-end text-purple-500 text-sm cursor-pointer">Login</Link></p>
      </form>
    </div>
  )
}

export default Register