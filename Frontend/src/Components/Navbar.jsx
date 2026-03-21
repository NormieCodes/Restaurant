import { Link } from "react-router-dom"

function Navbar () {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-green-800 border-b-2 border-b-black fixed z-50 w-full">
        <h1 className="font-extrabold font-mono text-xl cursor-pointer"><Link to="/#home">Simply South</Link></h1>

        <ul className="flex gap-6 font-semibold items-center">
          <li><Link className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' to="/#home">
            Home</Link>
          </li>

          <li><Link className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' to="/menu">
            Menu</Link>
          </li>

          <li><Link className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' to="/cart">
            Cart</Link>
          </li>

          <li><Link className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' to="/#contact">
            Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar