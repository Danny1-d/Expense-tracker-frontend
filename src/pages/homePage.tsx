import { Link } from "react-router-dom"
import logo from "/logo.jpg"


const HomePage = () => {
  return (
    <div className="bg-wheat-800 h-screen w-screen flex flex-col justify-between">
      <div className='flex justify-between md:p-6 p-3'>
        <div className="flex justify-center items-center gap-3">
          <img src={logo} alt="Logo" className='md:w-10 md:h-10 w-5 h-5 rounded-full' />
          <h2 className='font-bold md:text-xl text-sm'>DANNY</h2>
        </div>
        <Link to='/signin'>
          <h4 className='border border-[#340260] rounded-full px-5 py-2 font-semibold text-sm'>Login</h4>
        </Link>
      </div>

      <div className='items-center justify-center md:px-30 md:py-20 p-10 m-auto'>
        <h2 className='font-bold md:text-3xl text-lg text-center'>Welcome to Our App</h2>
        <h4 className='md:text-lg text-sm text-[#7E7E7E] mx-auto text-center'>Your personal finance assistant</h4>
        <h4 className='md:text-lg text-sm text-[#7E7E7E] max-w-[270px] mx-auto text-center'>Get started by creating an account</h4>
        <div className='flex justify-center mt-10'>
        <Link to='/signup'>
          <button className='bg-[#340260] text-gray-300 px-10 md:px-10 py-2 rounded-full cursor-pointer font-semibold'>Get Started</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default HomePage