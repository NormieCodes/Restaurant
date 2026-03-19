function Navbar () {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-green-800 border-b-2 border-b-black">
        <h1 className="font-extrabold font-mono text-xl cursor-pointer">Simply South</h1>

        <ul className="flex gap-6 font-semibold items-center">
          <li><a className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' href="#home">
            Home</a>
          </li>

          <li><a className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' href="#menu">
            Menu</a>
          </li>

          <li><a className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' href="#cart">
            Cart</a>
          </li>

          <li><a className='hover:bg-green-500 py-2 px-3 rounded-md duration-200' href="#contact">
            Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar