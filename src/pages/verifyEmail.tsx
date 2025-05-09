import { useState } from "react"
import OtpInput from "react-otp-input"


const VerifyEmail = () => {

  const [ otp, setOtp] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(otp);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 m-auto rounded-2xl px-3 sm:px-24 py-14 h-screen">
    <div className="font-bold text-2xl">Input code</div>
    <div className="text-sm text-[#7E7E7E]">Enter 5 digits code sent to your email</div>

    <form className="flex flex-col gap-2 rounded-3xl" onSubmit={handleSubmit}>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        renderSeparator={<span>&nbsp;</span>}
        renderInput={(props) => (
      <input
        {...props}
        className="border border-gray-300 text-center text-xl focus:border-orange-500 focus:outline-none rounded-lg"
        style={{
          width:"60px",
          height: "70px"
        }}
      />
        )}
      />
        
      <div className="flex justify-center gap-3 mt-4 bg-purple-600 rounded-md py-2">
        <button type="submit">Submit</button>
      </div>

    </form>
  </div>
  )
}

export default VerifyEmail