import { Link } from "react-router-dom"



const HomePage = () => {
  return (
    <div className="bg-wheat-800 h-screen w-screen flex flex-col justify-between">
      <div className='flex justify-between p-6'>
        <h2 className='font-bold text-xl'>DANNY</h2>
        <Link to='/signin'>
          <h4 className='border border-gray-300 rounded-full px-5 py-2'>Login</h4>
        </Link>
      </div>

      <div className='items-center justify-center md:px-30 md:py-20 p-10 m-auto rounded-lg'>
        <h2 className='font-bold text-3xl text-center'>Welcome to Our App</h2>
        <h4 className='text-lg text-[#7E7E7E] max-w-[270px] mx-auto text-center'>Your personal finance assistant</h4>
        <h4 className='text-lg text-[#7E7E7E] max-w-[270px] mx-auto text-center'>Get started by creating an account</h4>
        <div className='flex justify-center mt-10'>
        <Link to='/signup'>
          <button className='bg-purple-500 text-gray-300 px-10 md:px-10 py-2 rounded-full cursor-pointer'>Get Started</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default HomePage