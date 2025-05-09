import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import ForgotPassword from "./pages/forgotPassword"
import NotFound from "./pages/notFound"
import DashBoard from "./pages/dashBoard"
import HomePage from "./pages/homePage"
import VerifyEmail from "./pages/verifyEmail"
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App