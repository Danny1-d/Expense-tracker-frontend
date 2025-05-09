import { Link } from "react-router-dom"


const NotFound = () => {
  return (
     <div className='flex justify-center items-center h-screen'>
        <section className="flex flex-col items-center mt-12 font-bold gap-5">
          {/* <WarningAmberIcon /> */}
          <h1>404 Not Found</h1>
          <p>This Page does not exist</p>
          <button className="bg-blue-500 rounded px-1 py-1 font-bold">
          <Link to="/">
          <div>
            Go Back
          </div>
          </Link>
          </button>
  
        </section>
      </div>
  )
}

export default NotFound