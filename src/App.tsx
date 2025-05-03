import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import ForgotPassword from "./pages/forgotPassword"
import NotFound from "./pages/notFound"
import DashBoard from "./pages/dashBoard"

const App = () => {
  return (
    <div className="bg-[#F6F7F8]">
      <Routes>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
        <Route path="/auth/*" element={null} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App